/** @odoo-module **/

//Import the counter from new js file
import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";
import { registry } from "@web/core/registry";

const { Component } = owl;

class AwesomeDashboard extends Component {
    setup() {
        this.todos = [
            { id: 3, description: "buy milk", done: false },
            { id: 4, description: "buy eggs", done: true },
            { id: 5, description: "buy milk", done: false }
        ];
    }
}

//Define that this Dashboard uses that counter
AwesomeDashboard.components = { Counter, Todo };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
