import {Component} from "react";
import classes from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Layout extends Component {

    state = {
        menu: false
    }

    onToggleHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <MenuToggle
                    isOpen={this.state.menu}
                    onToggle={this.onToggleHandler}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
