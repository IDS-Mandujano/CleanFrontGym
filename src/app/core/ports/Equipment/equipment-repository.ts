import { IEquipment } from "../../models/Equipment/iequipment"

export interface EquipmentRepository {
        getAllEquipment() : Promise<IEquipment[]>
        getEquipmentById(id : number) : Promise<IEquipment>
        createEquipment(cname : string, category : string, ccondition : string) : Promise<IEquipment>
        updateEquipment(cname : string, category : string, ccondition : string, Equipment : Partial<IEquipment>) : Promise<IEquipment>
        deleteEquipment(id : number) : Promise<void>
}