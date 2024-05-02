import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import 'antd/dist/antd.js';
import { Layout, Row, Col } from 'antd';
import EmptySection from './components/EmptySection';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { Content } = Layout;

  const searchVideos = async (searchTerm) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: searchTerm,
          part: 'snippet',
          maxResults: 6,
          key: 'AIzaSyBruC1VlHlHe13TtIs7pyz20Du9Ii8JofE',
          type: 'video',
        },
      });

      const videosWithoutFirst = response.data.items.slice(1);
      setVideos(videosWithoutFirst);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '24px' }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <SearchBar onSearch={searchVideos} />
          </Col>

          { selectedVideo ? 
          <>
            <Col xs={24} sm={24} md={16} lg={18} xl={17}>
              <VideoPlayer video={selectedVideo} />
                <h2>{selectedVideo.snippet.title}</h2>
                <p>{selectedVideo.snippet.description}</p>
            </Col>

            <Col xs={24} sm={24} md={8} lg={6} xl={7}>
              <VideoList videos={videos} onSelectVideo={selectVideo} />
            </Col>
          </> : <EmptySection /> }

        </Row>
      </Content>
    </Layout>
  );
}

export default App;
