/* 
    This file is simply meant to be an aggregator of all API request composables.
    This file does not implement any logic of its own and simply serves the purpose of importing functions and exporting them out together so that they can be loaded from one file.
*/
import useGithub from './useGithub';

//* EXPORTS
export { useGithub };
