import {defineStore} from 'pinia'
import api from "@/api";
import type {Note} from "@/models/types/Note";

const getToStore = async (params:{}) => {
  return await api.getNotes(params)
}
const getToStoreByID = async (params:{},id:number) => {
  return await api.getNotesByID(params,id)
}

export const useNotesStore = defineStore('notesStore', {
  state : ()=>({
    notes:[],
    note: {} as Note,
    loading:false,
    error:null
  }),

  actions:{
    async fetchNotes(params:{}){
      this.notes = []
      this.loading = true;
      try{
        const response = await getToStore(params);
        this.notes = response.data;
      }catch (error){
        alert(error)
      }finally {
        this.loading = false
      }
    },
    async fetchNotesByID(params:{},id:number | undefined) {
      this.note = {} as Note
      this.loading = true
      if(id)
        try {
          const response= await getToStoreByID(params,id)
          this.note = response.data;
        } catch (error) {
          alert(error)
        } finally {
          this.loading = false
        }
    }
  }
})
