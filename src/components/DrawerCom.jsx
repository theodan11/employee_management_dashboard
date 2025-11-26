import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, message } from 'antd';
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
    const [progressAPI, progressContextHolder] = message.useMessage();
    const [successMessageApi, successMessagecontextHolder] = message.useMessage();
    const onClose = () => {
        dispatch({ type: "DRAWER_CLOSE" })
    };


    const progressIndicator = () => {
        progressAPI.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });
    };


    const successMessage = () => {
        successMessageApi.open({
            type: 'success',
            content: 'Employee updated successfully',
        });
    };

    const handleEditSave = (values) => {
        console.log(`Edit Form values: ${values.name}`)
        values.join = values.join.format("YYYY MMM DD")
        dispatch({
            type: "EDIT_EMPLOYEE", payload: {
                id: selectedEmployee.id,
                updatedInfo: { ...values }
            }
        })
        successMessage()
        // dispatch({ type: "DRAWER_CLOSE" })
    }
    // console.log(selectedEmployee)
    return (
        <>
            {progressContextHolder}
            {successMessagecontextHolder}


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
    
            >
                {selectedEmployee &&
                    <Form
                        layout="vertical"
                        requiredMark={false}
                        initialValues={{
                            name: selectedEmployee.name,
                            department: selectedEmployee.department,
                            role: selectedEmployee.role,
                            status: selectedEmployee.status,
                            join: dayjs(selectedEmployee.join, "YYYY-MMM-DD")
                        }}
                        onFinish={handleEditSave}
                    >
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item

                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                    <Input placeholder="Please enter user name" />
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
                                    name="join"
                                    label="Joining Date"
                                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                                >
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        getPopupContainer={trigger => trigger.parentElement}
                                        disabledDate={(current) => current && current > dayjs().endOf("day")}
                                    />
                                </Form.Item>
                            </Col>


                        </Row>
                        <Row gutter={16}>
                            <Col span={10}>
                                <Button onClick={onClose}>Cancel</Button>

                            </Col>

                            <Col span={10}>
                                <Button htmlType='submit' type="primary">
                                    Save & Continue Editing
                                </Button>

                            </Col>

                        </Row>

                    </Form>
                }
            </Drawer>
        </>
    );
};
export default App;

