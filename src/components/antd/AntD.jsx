// na początku pliku .css trzeba dodać: @import '~antd/dist/antd.css';

import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Space,
  Switch,
  Badge,
  Form,
  Input,
  Select,
  Row,
  Col,
} from 'antd';

export default function AntD() {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Witam pana!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Witam panią!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Witam inną płeć!' });
        return;
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Witam Ciebie',
      gender: 'mężczyzna',
    });
  };

  const validateMessages = {
    required: 'pole "${label}" jest wymagane!',
    types: {
      email: '${label} to nie jest email!',
      number: '${label} to nie jest numer!',
    },
    number: {
      range: '${label} wartość musi być pomiędzy ${min} a ${max}',
    },
  };

  return (
    <div className="frame">
      <h1>Ant Design</h1>
      <div>
        <Row justify="left">
          <Col span={12} style={{ textAlign: 'right' }}>
            Wprowadź swoją datę:
          </Col>
          <Col span={12} style={{ textAlign: 'left' }}>
            <DatePicker />
          </Col>
        </Row>
      </div>
      <br />
      <Space>
        <Button type="dashed">Przycisk</Button>
        <Button type="danger">Uwaga!</Button>
      </Space>
      <div>
        <br />
        <Space>
          <Switch
            checked={show}
            onChange={() => {
              setShow(!show);
            }}
          />
          <Badge count={show ? 25 : 0} />
          <Badge count={show ? 4 : 0} className="site-badge-count-4" />
          <Badge
            className="site-badge-count-109"
            count={show ? 109 : 0}
            style={{ backgroundColor: 'magenta' }}
          />
        </Space>
      </div>
      <br />
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name="note" label="Informacja" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Płeć"
          tooltip="Wybierz swoją płeć"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Wybierz płeć, a zostanie wpisany tekst powyżej!"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">mężczyzna</Option>
            <Option value="female">kobieta</Option>
            <Option value="other">inna płeć</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Inna płeć"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Zatwierdź
            </Button>
            <Button danger htmlType="button" onClick={onReset}>
              Usuń
            </Button>
            <Button type="dashed" htmlType="button" onClick={onFill}>
              Wypełnij domyślnie
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
