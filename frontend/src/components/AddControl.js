import React, {useState} from 'react'
import axios from 'axios';

import {
    Field,
    Control,
    Input,

} from 'react-bulma-components/lib/components/form';
import Button from "react-bulma-components/lib/components/button";
import {endpoint} from "../coordinator";

export default (props) => {
    const [url, setUrl] = useState("");

     const doSubmit = async (evt) => {
        evt.preventDefault()
        const res = await axios({
            method: 'post',
            url: endpoint + "/url",
            data: { url }
        });
        return false
    };

    return <form onSubmit={evt => doSubmit(evt)}>
        <Field kind="addons">
            <Control>
                <Input placeholder="an URL" value={url} onChange={evt => setUrl(evt.target.value)}/>
            </Control>
            <Control>
                <Button renderAs="button" color="primary">Add</Button>
            </Control>
        </Field>
    </form>
}