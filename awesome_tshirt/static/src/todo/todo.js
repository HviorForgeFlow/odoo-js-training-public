/** @odoo-module */

const { Component } = owl;

export class Todo extends Component {
//    static props = {
//        id: { type: Number },
//        description: { type: String },
//        done: { type: Boolean },
//    }; Right solution but it can be done as below:
}

Todo.template = "awesome_tshirt.Todo";
Todo.props = {
    id: { type: Number },
    description: { type: String },
    done: { type: Boolean },
};