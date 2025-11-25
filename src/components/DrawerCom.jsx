import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import dayjs from "dayjs";
import { EmployeeContext } from '../context/EmployeeContext';
const UrlInput = props => {
    return (
        <Space.Compact>
            <Space.Addon>http://</Space.Addon>
            <Input style={{ width: '100%' }} {...props} />
            <Space.Addon>.com</Space.Addon>
        </Space.Compact>
    );
};
const App = () => {
    const { isDrawerOpen, selectedEmployee, dispatch } = useContext(EmployeeContext)
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        dispatch({ type: "DRAWER_CLOSE" })

    };
    // console.log(selectedEmployee)
    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                New account
            </Button>
            <Drawer
                title="Edit Employee "
                size={720}
                onClose={onClose}
                open={isDrawerOpen}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={isDrawerOpen} type="primary">
                            Save
                        </Button>
                    </Space>
                }
            >
                {selectedEmployee &&
                    <Form layout="vertical" requiredMark={false}>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    defaultValue={selectedEmployee?.name}
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                    <Input placeholder="Please enter user name" defaultValue={selectedEmployee.name} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="department"
                                    label="Department"
                                    rules={[{ required: true, message: 'Please select an owner' }]}
                                >
                                    <Select
                                    defaultValue={selectedEmployee.department}
                                        placeholder="Please select an owner"
                                        options={[
                                            { label: 'Xiaoxiao Fu', value: 'xiao' },
                                            { label: 'Maomao Zhou', value: 'mao' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="role"
                                    label="Role"
                                    rules={[{ required: true, message: 'Please choose the role' }]}
                                >
                                    <Select
                                    defaultValue={selectedEmployee.role}
                                        placeholder="Please choose the type"
                                        options={[
                                            { label: 'private', value: 'private' },
                                            { label: 'public', value: 'public' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="status"
                                    label="Status"
                                    rules={[{ required: true, message: 'Please choose the Status' }]}
                                >
                                    <Select
                                    defaultValue={selectedEmployee.status}
                                        placeholder="Please choose the approver"
                                        options={[
                                            { label: 'Jack Ma', value: 'jack' },
                                            { label: 'Tom Liu', value: 'tom' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="dateTime"
                                    label="DateTime"
                                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                                >
                                    <DatePicker
                                    defaultValue={selectedEmployee.join}
                                        style={{ width: '100%' }}
                                        getPopupContainer={trigger => trigger.parentElement}
                                        disabledDate={(current) => current && current > dayjs().endOf("day")}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                }
            </Drawer>
        </>
    );
};
export default App;

