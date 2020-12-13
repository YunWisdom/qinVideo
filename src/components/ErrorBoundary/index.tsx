import React, { Component } from "react";
import { getLang } from "@/locales";
import styles from "./index.less";

import { Spin } from "antd";

interface StateType {
  hasError: boolean;
}
export class ErrorBoundary extends Component<unknown, StateType> {
  state = { hasError: false };

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div className={styles.errorBoundary}>{getLang("common.error.errorboundry")}</div>
    ) : (
      children
    );
  }
}

export const SuspenseLoading: React.FC = () => {
  return (
    <div className={styles.suspenseLoading}>
      <Spin size="large" />
    </div>
  );
};
