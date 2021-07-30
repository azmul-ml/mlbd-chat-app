import { Button, Select } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";
import { IAddMember } from "../group/types/groput-chat.types";
import { addGroupMemberSlice } from "../group/redux/add.group.member.slice";

const { Option } = Select;

export default function AddMember({ allUsers, setVisible }: any) {
  const singleGroup: any = useAppSelector((state: any) => state.singleGroup);
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState([]);
  function onChange(value: any) {
    setUsers(value);
  }
  //   function onSearch(val: any) {
  //     console.log("search:", val);
  //   }
  const handleAdd = () => {
    const data: IAddMember = {
      token: cookie.load(AUTH_ACCESS_TOKEN),
      group_id: singleGroup.id,
      user_ids: users,
    };
    dispatch(addGroupMemberSlice(data));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Select
        showSearch
        mode="multiple"
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={(input, option: any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {allUsers?.map((user: any) => (
          <Option value={user._id}>{user.name}</Option>
        ))}
      </Select>
      <div>
        <Button
          style={{ marginTop: "10px", marginLeft: "70px", marginRight: "5px" }}
          onClick={handleAdd}
        >
          Add
        </Button>
        <Button onClick={() => setVisible(false)}>Close</Button>
      </div>
    </div>
  );
}
