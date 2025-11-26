import { useContext } from 'react';
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
import { useForm } from 'antd/es/form/Form';


const FormDisabledDemo = () => {

    const { dispatch, status } = useContext(EmployeeContext)
    const [progressAPI, progressContextHolder] = message.useMessage();
    const [successMessageApi, successMessagecontextHolder] = message.useMessage();
    const [form] = useForm()


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
            content: 'Employee added successfully',
        });
    };


    const handlesubmit = (values) => {
        values.join = values.join.format("YYYY-MMM-DD")
        values.key = Math.floor(Math.random() * 100)
        values.id = values.key
        dispatch({ type: "PROGRESSING" })
        progressIndicator()


        dispatch({ type: "ADD_EMPLOYEE", payload: values })
        progressAPI.destroy()
        successMessage()
        form.resetFields()
    }


    return (
        <>
            {progressContextHolder}
            {successMessagecontextHolder}

            <Form
                form={form}
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
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