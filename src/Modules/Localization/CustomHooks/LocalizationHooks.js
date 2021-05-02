
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import I18n from '../Config/I18nConfig';
import { Locales } from '../LocalizationConstants';
import { LocalizationSelectors, LocalizationActions } from '../Redux/LocalizationRedux';
import { tn } from "../Config/TextNames";


export function useLocalization() {
    const locale = useLocale();
    const localizationAgent = useMemo(() => {
        I18n.locale = locale;
        return I18n;
    }, [locale]);

    return localizationAgent;
}

export function useLocale() {
    return useSelector(LocalizationSelectors.locale);
}

export function useDispatchChangeLocale() {
    const dispatch = useDispatch();
    return key => dispatch(LocalizationActions.changeLocale({locale: key}));
}

export function useLocaleDateFormat() {
    const locale = useLocale();
    if (locale === Locales.turkish) {
        return "DD.MM.YYYY";
    }
    else if (locale === Locales.english) {
        return "MM/DD/YYYY";
    }
}
export function useLocaleOptions() {
    const locale = useLocale();
    const loc = useLocalization();

    const localeOptions = useMemo(() => {
        return [
            {
                key: Locales.english,
                title: loc.t(tn.english),
            },
            {
                key: Locales.turkish,
                title: loc.t(tn.turkish),
            }
        ]
    }, [locale]);

    return localeOptions;
}
