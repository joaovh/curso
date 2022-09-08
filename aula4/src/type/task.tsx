export interface ITask {
    id: string;
    descricao: string;
    created_at: Date;   
    schedule: Date;
    finished?: Date|null;
    deleted_at?: Date|null;  
}