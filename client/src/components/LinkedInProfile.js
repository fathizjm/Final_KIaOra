import { Form, Input } from "antd";
import React from "react";

function LinkedInInfo() {
    return (
        <div>
          <Form.Item
            name="linkedinlink"
            label="LinkedIn Info"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
   );
}

export default LinkedInInfo;