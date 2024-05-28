import React from "react";
import { Mention, MentionsInput } from "../../../src";
import defaultMentionStyle from "./defaultMentionStyle";
import defaultStyle from "./defaultStyle";
import { provideExampleValue } from "./higher-order";

function SingleLine({ value, data, onChange, onAdd }) {
    return (
        <div className="single-line">
            <h3>Single line input</h3>

            <MentionsInput
                singleLine
                value={value}
                onChange={onChange}
                style={defaultStyle}
                placeholder={"Mention people using '@'"}
                a11ySuggestionsListLabel={"Suggested mentions"}>
                <Mention
                    data={data}
                    onAdd={onAdd}
                    style={defaultMentionStyle}
                />
            </MentionsInput>
        </div>
    );
}

const asExample = provideExampleValue("");

export default asExample(SingleLine);
