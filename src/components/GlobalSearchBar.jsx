import React from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import './GlobalSearchBar.css'
const GlobalSearchBar = () => {

    return <Form
        className='global__searchbar'
        layout='horizontal'
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 1280 }}
    >
        <Form.Item>
            <Input placeholder="Basic usage" style={{ width: 800, maxWidth: 800 }}
            />

        </Form.Item>


        <Form.Item>
            <Select
                showSearch={{
                    filterOption: (input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
                }}
                placeholder="Department"
                options={[
                    { value: '1', label: 'Jack' },
                    { value: '2', label: 'Lucy' },
                    { value: '3', label: 'Tom' },
                ]}
            />
        </Form.Item>
        <Form.Item>
            <Select
                showSearch={{
                    filterOption: (input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
                }}
                placeholder="Status"
                options={[
                    { value: '1', label: 'Jack' },
                    { value: '2', label: 'Lucy' },
                    { value: '3', label: 'Tom' },
                ]}
            />
        </Form.Item>
        <Form.Item>
            <DatePicker.RangePicker
            />
        </Form.Item>
        <Form.Item>
            <Button type='primary'>Search</Button>
        </Form.Item>

    </Form>

};
export default GlobalSearchBar;