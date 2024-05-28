import React from "react";
import { Mention, MentionsInput } from "../../../src";
import defaultMentionStyle from "./defaultMentionStyle";
import defaultStyle from "./defaultStyle";
import { provideExampleValue } from "./higher-order";

function CustomSuggestionsContainer({ value, data, onChange, onAdd }) {
    return (
        <div className="custom-suggestions">
            <h3>Custom Suggestions Container</h3>

            <MentionsInput
                value={value}
                onChange={onChange}
                style={defaultStyle}
                placeholder={"Mention people using '@'"}
                a11ySuggestionsListLabel={"Suggested mentions"}
                allowSuggestionsAboveCursor={true}
                customSuggestionsContainer={(children) => (
                    <div>
                        <span style={{ fontWeight: "bold" }}>
                            <h2>This container has customised suggestions</h2>
                        </span>
                        {children}
                    </div>
                )}>
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

export default asExample(CustomSuggestionsContainer);
