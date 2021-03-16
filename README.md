# cf-worker-soul-soup

毒鸡汤 api 请求接口, 数据来自: [nows](https://github.com/egotong/nows)

## 接口文档

### 随机获取

- 接口描述: 随机获取一句毒鸡汤
- 请求地址: `https://soul-soup.fe.workers.dev`
- 请求方法: get
- 请求参数: 无

- 响应示例:

```json
{
  "id": 744,
  "title": "你连世界都没观过，哪来的世界观？"
}
```

### 根据 id 获取

- 接口描述: 根据 id 随机获取一句毒鸡汤 id(max:1210)
- 请求地址: `https://soul-soup.fe.workers.dev/:id`
- 请求方法: get
- 请求参数: 无

- 响应示例:

```json
// https://soul-soup.fe.workers.dev/222
{
  "id": 222,
  "title": "要感谢那些把你打倒的人，因为你会发现躺倒真的很舒服"
}
```
