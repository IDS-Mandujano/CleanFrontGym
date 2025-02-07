import { IMachine } from "../../models/Machine/imachine";

export interface MachineRepository {
    getAllMachine() : Promise<IMachine[]>
    getMachineById(id : number) : Promise<IMachine>
    createMachine(cname : string, ctype : string, cstatus : string) : Promise<IMachine>
    updateMachine(cname : string, ctype : string, cstatus : string, machine : Partial<IMachine>) : Promise<IMachine>
    deleteMachine(id : number) : Promise<void>
}
