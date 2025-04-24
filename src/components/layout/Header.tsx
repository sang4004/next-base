import classNames from "classnames/bind";
import styles from "@/styles/layout/header.module.scss";

export default function Header() {
  const cx = classNames.bind(styles);
  return (
    <header className={cx("header")}>
      <p>헤더 영역 입니다.</p>
    </header>
  );
}
