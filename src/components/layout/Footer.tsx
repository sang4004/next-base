import classNames from "classnames/bind";
import styles from "@/styles/layout/footer.module.scss";

export default function Footer() {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx("footer")}>
      <p>푸터 영역 입니다.</p>
    </footer>
  );
}
