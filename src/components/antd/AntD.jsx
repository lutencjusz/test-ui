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
import { toaster } from 'evergreen-ui';

export default function AntD() {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 12 },
  };

  const onGenderChange = (value) => {
    switch (value) {
      case 'mężczyzna':
        form.setFieldsValue({ note: 'Witam pana!' });
        return;
      case 'kobieta':
        form.setFieldsValue({ note: 'Witam panią!' });
        return;
      case 'inna płeć':
        form.setFieldsValue({ note: 'Witam inną płeć!' });
        return;
    }
  };

  const onFinish = (values) => {
    console.log({ values });
    toaster.success('Formularz wysłany...', {
      description: `z danymi: informacja "${values.note}"${
        values.customizeGender
          ? ', inna płeć: ' + values.customizeGender
          : ', płeć: ' + values.gender
      }`,
      duration: 3,
      id: 'forbidden-action',
    });
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
          <Col
            span={11}
            style={{ textAlign: 'right', lineHeight: '2', color: 'black' }}
          >
            Wprowadź swoją datę:
          </Col>
          <Col span={1}></Col>
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
            <Option value="mężczyzna">mężczyzna</Option>
            <Option value="kobieta">kobieta</Option>
            <Option value="inna płeć">inna płeć</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'inna płeć' ? (
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
        <Button.Group {...tailLayout}>
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
        </Button.Group>
      </Form>
      <br />
    </div>
  );
}
