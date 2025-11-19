import React, { useContext, useState } from 'react';
import dayjs from "dayjs";
import {
    Button,
    DatePicker,
    Form,
    Input,
    message,
    Select,
} from 'antd';
import { EmployeeContext } from '../context/EmployeeContext';
const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const FormDisabledDemo = () => {
    const { dispatch, status } = useContext(EmployeeContext)
    const [progressAPI, progressContextHolder] = message.useMessage();
    const [successMessageApi, successMessagecontextHolder] = message.useMessage();
    const progressIndicator = () => {
        progressAPI.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });
        // Dismiss manually and asynchronously
        // setTimeout(messageApi.destroy, 2500);
    };
    const successMessage = () => {
        successMessageApi.open({
            type: 'success',
            content: 'Employee added successfully',
        });
    };
    const [componentDisabled, setComponentDisabled] = useState(false);

    const handlesubmit = (values) => {
        // values.join = JSON.stringify(values.join.$d)
        values.join = Date(values.join.$d)
        dispatch({ type: "PROGRESSING" })
        progressIndicator()
        dispatch({ type: "ADD_EMPLOYEE", payload: values })
        progressAPI.destroy()
        successMessage()
    }
    return (
        <>
            {progressContextHolder}
            {successMessagecontextHolder}
            {/* {status === 'pending' && <TopProgressIndicator />} */}
            <Form
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
                disabled={componentDisabled}
                style={{ maxWidth: 1200 }}
                className='addemployee__form'
                onFinish={handlesubmit}
            >

                <Form.Item name="name" label="Name" required className='form__item__container' >
                    <Input className='form__input' />
                </Form.Item>
                <Form.Item name="department" label="Department" required >
                    <Select options={[{ label: 'Demo', value: 'demo' }]} />
                </Form.Item>
                <Form.Item name="status" label="Status" required >
                    <Select options={[{ label: 'Demo', value: 'demo' }]} />
                </Form.Item>
                <Form.Item name="role" label="Role" required >
                    <Select options={[{ label: 'Demo', value: 'demo' }]} />
                </Form.Item>


                <Form.Item name="join" label="Joining Date" required >
                    <DatePicker disabledDate={(current) => current && current > dayjs().endOf("day")} />
                </Form.Item>


                <Form.Item label="" >
                    <Button type='primary' htmlType='submit'>Save</Button>
                </Form.Item>



            </Form>
        </>
    );
};
export default () => <FormDisabledDemo />;