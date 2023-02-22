import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function First() {
  const [name, setname] = useState();
  const [check, setcheck] = useState(false);
  const [chgname, setchgname] = useState();
  const [uptade_id, setupdateid] = useState(0);
  const [showupdate, setshowupdate] = useState(false);

  const data = useSelector((state) => {
    console.log(state);
    return state;
  });
  const dispatch = useDispatch();
  const deletedata = (id_) => {
    dispatch({
      type: "del_name",
      payload: id_,
    });
  };
  const adddata = (id_) => {
    dispatch({
      type: "add_name",
      payload: {
        name: name,
        id: Math.random(),
      },
    });
  };
  const updatedata = (id_) => {
    dispatch({
      type: "update_name",
      payload: {
        name:chgname,
         id:id_
      },
    });
  };
  function handleChange(e) {
    setname(e.target.value);
  }
  function handleChange1(e) {
    setchgname(e.target.value);
  }
  function update(id) {
    setupdateid(id);
  }
  console.log(uptade_id, "idid");
  console.log(chgname, "aa");
  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <button
        onClick={() => {
          adddata();
        }}
      >
        {" "}
        Add
      </button>
      {data &&
        data?.length > 0 &&
        data?.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              {  item?.id!==uptade_id && (
                <input
                  type="text"
                  id="name"
                  name="name"
                  Value={item.name}
                  disabled
                />
              )}
              {check && item.id === uptade_id && (
                <input
            
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange1}
                  defaultValue={item.name}
                />
              )}
              <button
                onClick={() => {
                  deletedata(item.id);
                }}
              >
                Delete
              </button>

              <button
                onClick={() => {
                  setcheck(!check);
                  update(item?.id);
                  setshowupdate(!showupdate);
                }}
              >
                Edit
              </button>
              {showupdate && item.id === uptade_id && (
                <button
                  onClick={() => {
                    setshowupdate(!showupdate);
                    updatedata(item.id);
              
                  }}
                >
                  Update
                </button>
              )}
            </div>
          );
        })}
    </>
  );
}
export default First;
