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
        values.archive = false
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
                    <Select options={[{ label: "Engineering", value: "engineering" },
                    { label: "Human Resources", value: "hr" },
                    { label: "Marketing", value: "marketing" },
                    { label: "Finance", value: "finance" },
                    { label: "Design", value: "design" },
                    { label: "Operations", value: "operations" },
                    { label: "Support", value: "support" },
                    { label: "Sales", value: "sales" }]} />
                </Form.Item>
                <Form.Item name="status" label="Status" required >
                    <Select options={[
                        { label: "Active", value: "active" },
                        { label: "On Leave", value: "on_leave" },
                        { label: "Resigned", value: "resigned" },
                        { label: "Terminated", value: "terminated" },
                        { label: "Probation", value: "probation" }]} />
                </Form.Item>
                <Form.Item name="role" label="Role" required >
                    <Select options={[
  { label: 'Software Engineer', value: 'software_engineer' },
  { label: 'Product Manager', value: 'product_manager' },
  { label: 'UI/UX Designer', value: 'ui_ux_designer' },
  { label: 'Data Analyst', value: 'data_analyst' },
  { label: 'QA Engineer', value: 'qa_engineer' },
  { label: 'DevOps Engineer', value: 'devops_engineer' },
  { label: 'HR Manager', value: 'hr_manager' },
  { label: 'Marketing Specialist', value: 'marketing_specialist' },
  { label: 'Sales Executive', value: 'sales_executive' },
  { label: 'CEO', value: 'ceo' },]} />
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