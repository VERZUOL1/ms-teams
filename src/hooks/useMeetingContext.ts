import { app } from '@microsoft/teams-js';
import {useAsync} from "react-use";

export function useMeetingContext() {
    const {value} = useAsync(async () => {
        return app.getContext();

    }, []);

    return { data: value ? JSON.stringify(value) : null };
}

