import React, { useState } from 'react';
import { login } from './Login.Api';
import secureLocalStorage from 'react-secure-storage';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      
      if (!username || !password) {
        setError('Tên người dùng và mật khẩu không được để trống.');
        setLoading(false);
        return;
      }

      
      const payload = { Username: username, password: password };
      console.log('Payload gửi lên API:', payload);

     
      const res = await login(payload);

      
      if (res?.status === 200) {
        const data = res.data?.Data;

        
        secureLocalStorage.setItem('UserId', data?.browserId);
        localStorage.setItem('AccessToken', data?.AccessToken);
        localStorage.setItem('RefreshToken', data?.RefreshToken);

        setSuccessMessage('Đăng nhập thành công! Chào mừng bạn.');
      } else {
        setError(res?.data?.message || 'Đăng nhập không thành công. Vui lòng thử lại.');
      }
    } catch (err) {
      console.error('Lỗi đăng nhập:', err.response?.data || err.message);
      setError('Đã xảy ra lỗi khi kết nối với máy chủ. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Tên Người Dùng:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên người dùng"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mật Khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>

        {loading && <div className="loading-message">Đang xử lý...</div>}
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Đang Đăng Nhập...' : 'Đăng Nhập'}
        </button>
      </form>
    </div>
  );
};

export default Login;
