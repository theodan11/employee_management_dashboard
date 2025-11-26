import React, { useContext, useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import './GlobalSearchBar.css'
import { EmployeeContext } from '../context/EmployeeContext';
import dayjs from "dayjs";
const GlobalSearchBar = () => {
    const { employees } = useContext(EmployeeContext)
    const [form] = Form.useForm()
    const [searchValue, setSearchValue] = useState({})
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        const interval = setTimeout(() => {

            if (!searchValue.search || searchValue.search.trim() === "") {
                setSearchResult([])
            }
            else {
               
                let searchRe = employees.filter((empl) => {
                    let empljoin = dayjs(empl.join)
                    const [start, end] = searchValue.join || []
                    return (
                       (!searchValue.search || empl.name.toLowerCase().includes(searchValue.search.toLowerCase())) && 
                        (!searchValue.department || empl.department === searchValue.department) && 
                        (!searchValue.status || empl.status === searchValue.status) &&
                        (!searchValue.join ||( empljoin.isAfter(start, 'day') && empljoin.isBefore(end, 'day')))
                    )
                })
                setSearchResult(searchRe)

            }
        }, 500)
        return () => { clearTimeout(interval) }

    }, [searchValue])
    const handleSearch = (values) => {
        console.log(values.search)
    }

    return <div className="global__search__container">
        <Form
            form={form}
            className='global__searchbar'
            layout='horizontal'
            style={{ maxWidth: 1280 }}
            onFinish={handleSearch}
            onValuesChange={(changedValue, allvalue) => {
                setSearchValue(allvalue)
            }}

        >
            <Form.Item name='search' >
                <Input placeholder="Search..." style={{ width: 800, maxWidth: 800 }}
                />

            </Form.Item>


            <Form.Item name='department' >
                <Select

                    showSearch={{
                        filterOption: (input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
                    }}
                    placeholder="Department"
                    options={[
                        { label: "Engineering", value: "engineering" },
                        { label: "Human Resources", value: "hr" },
                        { label: "Marketing", value: "marketing" },
                        { label: "Finance", value: "finance" },
                        { label: "Design", value: "design" },
                        { label: "Operations", value: "operations" },
                        { label: "Support", value: "support" },
                        { label: "Sales", value: "sales" }
                    ]}
                />
            </Form.Item>
            <Form.Item name='status' >
                <Select

                    showSearch={{
                        filterOption: (input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
                    }}
                    placeholder="Status"
                    options={[
                        { label: "Active", value: "active" },
                        { label: "On Leave", value: "on_leave" },
                        { label: "Resigned", value: "resigned" },
                        { label: "Terminated", value: "terminated" },
                        { label: "Probation", value: "probation" }
                    ]}
                />
            </Form.Item>
            <Form.Item name='join' >
                <DatePicker.RangePicker

                />
            </Form.Item>
            {/* <Form.Item>
                <Button htmlType='submit' type='primary'>Search</Button>
            </Form.Item> */}

        </Form>
        {searchResult.length >0 ? <div className="search_result">
            {searchResult.map((item) => {
                return <div key={item.id} className="search_item">{item.name} - {item.department}</div>
            })}
        </div> : <></>}
    </div>

};
export default GlobalSearchBar;