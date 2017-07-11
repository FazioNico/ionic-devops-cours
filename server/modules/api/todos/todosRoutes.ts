/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-07-2017
*/

import * as express from 'express';
import { todoController }  from "../../mongodb/todos/todos.controller";
import { log } from '../../log';

const router:any = express.Router();

export class TodosRoutes {

    private _TodosController: any;

    constructor () {
        this._TodosController = todoController;
    }

    routes() {
        let controller:any = this._TodosController;
        router.get('/todos', log, controller.getItems)
        router.get('/todos/:id', log, controller.getItem)
        router.post('/todos', log, controller.addItem )
        router.put('/todos/:id', log, controller.updateItem )
        router.delete('/todos/:id', log, controller.deleteItem )

        return router;
    }

}
