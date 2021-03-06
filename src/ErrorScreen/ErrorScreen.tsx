import React, { memo } from "react";
import { Result } from "antd";
import { ClientErrors } from "constants/apiConst";
import { withTranslation, WithTranslation } from "react-i18next";

interface IProps extends WithTranslation {
  status: ClientErrors;
}

/** 404 Not found screen */
const ErrorScreen = ({ t, status }: IProps) => {
  if (status === ClientErrors.FORBIDDEN) {
    return (
      <Result
        title={t("clientErrors.forbiddenTitle")}
        subTitle={t("clientErrors.forbidden")}
      />
    );
  } else {
    return (
      <Result
        title={t("clientErrors.notFoundTitle")}
        subTitle={t("clientErrors.notFound")}
      />
    );
  }
};

export default withTranslation()(memo(ErrorScreen));
