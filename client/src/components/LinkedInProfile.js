import React from "react";
import { Form, Input } from "antd";

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