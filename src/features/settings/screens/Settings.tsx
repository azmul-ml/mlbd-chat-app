import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "antd";
import cookie from "react-cookies";

import { useAppDispatch } from "../../../app/hooks";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";
import { lockGroup } from "../redux/settings.slice";
// import { LoginCredentials } from "../types/auth.types";

export default function Settings() {
  const { id } = useParams<{ id: string }>();

  console.log("group id", id);
  const dispatch = useAppDispatch();
  // let history = useHistory();

  const handleLockGroupSubmit = async (id: string) => {
    const token = cookie.load(AUTH_ACCESS_TOKEN);
    const data = {
      group_id: id,
      token,
    };
    const res = await dispatch(lockGroup(data));
    console.log(res.payload);
    // setGroupItem(res.payload);
    // res.payload && history.push(`app/room/${id}`);
  };

  return (
    <div className="">
      <Card title="Settings" style={{ width: 300 }}>
        <Button type="link" onClick={() => handleLockGroupSubmit(id)}>
          Lock Group
        </Button>
      </Card>
    </div>
  );
}
