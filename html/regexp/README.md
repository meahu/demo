# 正则表达式案例

## replace

### 写一个 escapeHtml 函数，将 <, >, &, “ 进行转义

```
function escapeHtml(str) {
    return str.replace(/["<>&]/g, function(match) {
        switch(match) {
            case '<' :
                return '&lt;';
            case '>' :
                return '&gt;';
            case '&' :
                return '&amp;';
            case '"':
                return '&quot;';
        }
    });
}
```

