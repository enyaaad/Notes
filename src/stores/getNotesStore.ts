import {defineStore} from 'pinia'
import api from "@/api";
import type {PropType} from "vue";

const getToStore = async (params:{}) => {
  // const res = await api.getNotes(params);
  // const data = await res.data.json();
  // notes.value = data.results;
  return await api.getNotes(params)
}
const getToStoreByID = async (params:{},id:number) => {
  // const res = await api.getNotes(params);
  // const data = await res.data.json();
  // notes.value = data.results;

  return await api.getNotesByID(params,id)
}

export const useNotesStore = defineStore('notesStore', {
  state : ()=>({
    notes:[],
    note: null,
    loading:false,
    error:null
  }),

  actions:{
    async fetchNotes(params:{}){
      this.notes = []
      this.loading = true;
      try{
        this.notes = await getToStore(params).then((res)=>res.data)
      }catch (error){
        alert(error)
      }finally {
        this.loading = false
      }
    },
    async fetchNotesByID(params:{},id:number) {
      this.note = null
      this.loading = true
      try {
        this.note = await getToStoreByID(params,id).then((res)=>res.data)
      } catch (error) {
        alert(error)
      } finally {
        this.loading = false
      }
    }
  }
})
