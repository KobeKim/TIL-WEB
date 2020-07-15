import React from "react";
import "../css/editor.css";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
function HashTag() {
  const stTag = this.state.tag;
  const list = stTag.map((info) => <div key={stTag.id}>{stTag.tagText}</div>);
  return list;
}
class MdEditor extends React.Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
    };
  }
  handleKeyPress = (event) => {
    if (event.key === ",") {
      this.setState({
        tag: this.state.tag.concat({
          id: this.id++,
          tagText: event.target.value.replace(",", ""),
        }),
      });
      HashTag();
    }
  };

  render() {
    console.log(`render`, this.state.tag);

    return (
      <div className="editor">
        <div className="title">
          <textarea
            placeholder="제목을 입력하세요"
            className="title-area"
          ></textarea>
          <div className="line"></div>
          <div className="tagDiv">
            <input
              placeholder="태그를 입력하세요"
              className="tagText"
              onKeyPress={this.handleKeyPress}
            />
            {JSON.stringify(this.state.tag)}
          </div>
        </div>
        <Editor
          initialValue="Hello world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          plugins={[colorSyntax]}
          ref={this.editorRef}
        />
      </div>
    );
  }
}

export default MdEditor;
