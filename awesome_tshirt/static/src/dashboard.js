/** @odoo-module **/

//Import the counter from new js file
import { Counter } from "./counter/counter";
import { registry } from "@web/core/registry";

const { Component } = owl;

class AwesomeDashboard extends Component {}

//Define that this Dashboard uses that counter
AwesomeDashboard.components = { Counter }
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
