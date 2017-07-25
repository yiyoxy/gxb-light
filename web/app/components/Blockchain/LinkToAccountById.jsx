import React from "react";
import {Link} from "react-router/es";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";

class LinkToAccountById extends React.Component {

    static propTypes = {
        account: ChainTypes.ChainObject.isRequired,
        subpage: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        subpage: "overview"
    };

    shouldComponentUpdate(nextProps) {
        // console.log("linkToAccountById:", nextProps.account.toJS());
        if (nextProps.account.get("name") && this.props.account.get("name") && nextProps.account.get("name") === this.props.account.get("name")) {
            return false;
        }
        return true;
    }

    render() {
        let account_name = this.props.account.get("name");
        if (!account_name) {
            console.log( "!account_name: ", this.props.account.toJS() );
            return <span>{this.props.account.get("id")}</span>;
        } else {
            // console.log( "account_name exists: ", this.props.account.get("id"), this.props.account.get("name") );
        }

        return <Link onClick={this.props.onClick ? this.props.onClick : () => {}} to={`/account/${account_name}/${this.props.subpage}/`}>{account_name}</Link>;
    }
}

export default BindToChainState(LinkToAccountById);
