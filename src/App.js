import { Table, Pagination } from "antd";
import AddNewSong from "./AddSongs/AddNewSong";
import queryString from "query-string";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [songs, setSongs] = useState([]);

  const [filters, setFilters] = useState({
    page: 1,
    per_page: 10,
  });
  // Test
  const [current, setCurrent] = useState(1);

  // call api
  useEffect(() => {
    const paramString = queryString.stringify(filters);

    // page=1
    fetch(`https://music-i-like.herokuapp.com/api/v1/songs?${paramString}`)
      .then((res) => res.json())

      .then((data) => {
        setSongs(data.data);
      });
  }, [filters]);

  // xoa bai hat
  const handleDelete = (song) => {
    const listSongs = songs.filter((s) => s !== song);
    setSongs(listSongs);
  };

  // table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // render: (text) => <a style={{padding: 30}}>{text}</a>,
      width: 400,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 600,
    },
    {
      title: "Singer",
      dataIndex: "singer",
      key: "singer",
      width: 350,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      width: 250,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      // render: () => (
      //     <button >Delete</button>
      // ),
    },
  ];

  // render
  const list = [];

  songs.map((song) => {
    list.push({
      stt: song.id,
      key: song.id,
      name: song.name,
      description: song.description,
      singer: song.singer,
      author: song.author,
      action: <button onClick={() => handleDelete(song)}>delete</button>,
    });
  });

  // Test
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    const newFilters = {
      page,
      per_page: 10,
    };
    setFilters(newFilters);
  };

  const addSong = (songInput, singerInput, descriptionInput, authorInput) => {
    const newSongs = [
      ...list,
      {
        name: songInput,
        singer: singerInput,
        description: descriptionInput,
        author: authorInput,
      },
    ];
    setSongs(newSongs);
  };

  return (
    <div>
      
      <Table columns={columns} dataSource={list} />
      <div className="container">
      <AddNewSong addSong={addSong}></AddNewSong>
      <Pagination
        defaultCurrent={1}
        total={101}
        current={current}
        onChange={onChange}
      />     

      </div>
      

      
    </div>
      );
}

export default App;
