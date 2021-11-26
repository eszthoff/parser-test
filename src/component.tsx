import { Trans, useTranslation } from 'react-i18next';

const Component = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Trans i18nKey="trans1">This should be only the key trans1, not the value</Trans>
            <Trans i18nKey="trans2">This should be only the key trans2, <em>not the value</em></Trans>
            {t('This is just the key, as it should be')}
        </div>
    );
};

export default Component;
