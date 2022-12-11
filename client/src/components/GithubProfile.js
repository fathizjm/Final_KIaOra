import { Form, Input } from "antd";
import React from "react";

function GithubInfo() {
    return (
        <div>
          <Form.Item
            name="Githublink"
            label="Github Info"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
   );
}

export default GithubInfo;