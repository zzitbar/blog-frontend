import { Message  } from 'element-ui';

export const showSuccess = (msg) => {
    Message ({
        message: msg,
        type: 'success'
    });
}
export const showError = (msg) => {
    Message ({
        showClose: true,
        type: 'error',
        message: msg,
        duration:0
    });
}
export const showNetError = (res) => {
    Message ({
        showClose: true,
        type: 'error',
        dangerouslyUseHTMLString: true,
        message: res.status+" : "+res.statusText+(undefined==res.data.errorMsg?"":"<br/>"+res.data.errorMsg),
        duration:0
    });
}