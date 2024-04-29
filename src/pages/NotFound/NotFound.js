import { Link } from 'react-router-dom';
import './_not_found.scss';

export default function NotFound() {
    return (
        <div className="notfound__wrapper">
            <div className='notfound__content'>
                <h1 className="notfound__code">404</h1>
                <h3 className="notfound__title">Không tìm thấy nội dung 😓</h3>
                <p className="notfound__detail">URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.</p>
                <p className="notfound__detail">Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay vì dùng URL đã lưu.</p>
                <Link className="notfound__back__btn" to='/'>Truy cập trang chủ</Link>
            </div>
            <p className='notfound_copyright'>© 2024 hieumaixuan</p>
        </div>
    )
}