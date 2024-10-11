import { app } from '@microsoft/teams-js';
import {useAsync} from "react-use";

export function useTeamsInit() {
    useAsync(async () => {
        await app.initialize();
    }, [])
}

