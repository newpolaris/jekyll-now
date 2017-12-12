---
layout: post
title: Hello World
---

```java
String str = "Hello world";
System.out.println(str);
```
```c++
#include <iostream>
int main()
{
  std::cout << "Hello world\n" << std::endl;
  return 0;
}
<script src="/code/lib/demo/helloworld.js"></script>
<script>helloworld_demo('helloworld-demo')</script>
```
<div id='helloworld-demo'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js"></script>
<script src='/lib/require.js'></script>
<script>
	requirejs.config({
	baseUrl: '/',
	paths: {
		require: 'lib/require',
		math:    'lib/math.min',
		code:    'code/lib'
	}
	});
</script>
<script>
	require(["code/demo/helloworld"], function (init) { init('helloworld-demo'); });
</script>
