<template>
  <div class="main-container">
    <el-row :gutter="20">
      <!--left-->
      <el-col :span="18">
        <!--面包屑-->
        <div class="mbx">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/devPlatform' }">开发者平台</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" @click="goDevPlatForm('2')">技术领域</a></el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!--文章标题-->
        <h class="articleTitle">{{ articleTitle }}</h>
        <!--作者信息-->
        <div class="authorInfo">
          <img class="authorImg" style="margin-right: 15px;" src="@/assets/images/u694.png">
          <span style="margin-right: 15px;color: initial">{{ authorName }}</span>
          <div style="margin-right: 15px;">
            <span>发表于{{ articleTime }}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-view" /> <span>{{ viewNumber }}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-chat-dot-round" /> <span>{{ infoNumber }}</span>
          </div>
          <div style="margin-right: 15px;">
            <svg-icon icon-class="zan" fill="#fl0" /> <span>{{ viewNumber }}</span>
          </div>
        </div>
        <!--文章类型-->
        <div class="articleType">
          <el-button>Docker</el-button>
          <el-button>容器</el-button>
        </div>
        <!--摘要-->
        <!--        <div class="abstract">{{abstract}}</div>-->
        <!--文章内容-->
        <div class="articleCon">
          <P style="font-weight: bold">一、微服务介绍</P><br>
          <P style="font-weight: bold">1. 什么是微服务</P><br>
          <P>在介绍微服务时，首先得先理解什么是微服务，顾名思义，微服务得从两个方面去理解，什么是"微"、什么是"服务"， 微 狭义来讲就是体积小、著名的"2 pizza 团队"很好的诠释了这一解释(2 pizza 团队最早是亚马逊 CEO Bezos提出来的，意思是说单个服务的设计，所有参与人从设计、开发、测试、运维所有人加起来 只需要2个披萨就够了 )。 而所谓服务，一定要区别于系统，服务一个或者一组相对较小且独立的功能单元，是用户可以感知最小功能集。</P>
          <br>
          <P style="font-weight: bold">2. 微服务由来</P><br>
          <P>微服务最早由Martin Fowler与James Lewis于2014年共同提出，微服务架构风格是一种使用一套小服务来开发单个应用的方式途径，每个服务运行在自己的进程中，并使用轻量级机制通信，通常是HTTP API，这些服务基于业务能力构建，并能够通过自动化部署机制来独立部署，这些服务使用不同的编程语言实现，以及不同数据存储技术，并保持最低限度的集中式管理。</P>
          <br>
          <P style="font-weight: bold">3. 为什么需要微服务?</P><br>
          <P>在传统的IT行业软件大多都是各种独立系统的堆砌，这些系统的问题总结来说就是扩展性差，可靠性不高，维护成本高。到后面引入了SOA服务化，但是，由于 SOA 早期均使用了总线模式，这种总线模式是与某种技术栈强绑定的，比如：J2EE。这导致很多企业的遗留系统很难对接，切换时间太长，成本太高，新系统稳定性的收敛也需要一些时间。最终 SOA 看起来很美，但却成为了企业级奢侈品，中小公司都望而生畏。</P>
          <br>
          <P>3.1 最期的单体架构带来的问题</P><br>
          <P>单体架构在规模比较小的情况下工作情况良好，但是随着系统规模的扩大，它暴露出来的问题也越来越多，主要有以下几点：</P>
          <br>
          <P>1.复杂性逐渐变高</P><br>
          <P>比如有的项目有几十万行代码，各个模块之间区别比较模糊，逻辑比较混乱，代码越多复杂性越高，越难解决遇到的问题。</P><br>
          <P>2.技术债务逐渐上升</P><br>
          <P>公司的人员流动是再正常不过的事情，有的员工在离职之前，疏于代码质量的自我管束，导致留下来很多坑，由于单体项目代码量庞大的惊人，留下的坑很难被发觉，这就给新来的员工带来很大的烦恼，人员流动越大所留下的坑越多，也就是所谓的技术债务越来越多。</P><br>
          <P>3.部署速度逐渐变慢</P><br>
          <P>这个就很好理解了，单体架构模块非常多，代码量非常庞大，导致部署项目所花费的时间越来越多，曾经有的项目启动就要一二十分钟，这是多么恐怖的事情啊，启动几次项目一天的时间就过去了，留给开发者开发的时间就非常少了。</P><br>
          <P>4.阻碍技术创新</P><br>
          <P>比如以前的某个项目使用struts2写的，由于各个模块之间有着千丝万缕的联系，代码量大，逻辑不够清楚，如果现在想用spring mvc来重构这个项目将是非常困难的，付出的成本将非常大，所以更多的时候公司不得不硬着头皮继续使用老的struts架构，这就阻碍了技术的创新。</P><br>
          <P>5.无法按需伸缩</P><br>
          <P>比如说电影模块是CPU密集型的模块，而订单模块是IO密集型的模块，假如我们要提升订单模块的性能，比如加大内存、增加硬盘，但是由于所有的模块都在一个架构下，因此我们在扩展订单模块的性能时不得不考虑其它模块的因素，因为我们不能因为扩展某个模块的性能而损害其它模块的性能，从而无法按需进行伸缩。</P>
          <br>
          <P>3.2 微服务与单体架构区别</P><br>
          <P>单体架构所有的模块全都耦合在一块，代码量大，维护困难，微服务每个模块就相当于一个单独的项目，代码量明显减少，遇到问题也相对来说比较好解决。</P><br>
          <P>单体架构所有的模块都共用一个数据库，存储方式比较单一，微服务每个模块都可以使用不同的存储方式(比如有的用redis，有的用mysql等)，数据库也是单个模块对应自己的数据库。</P><br>
          <P>单体架构所有的模块开发所使用的技术一样，微服务每个模块都可以使用不同的开发技术，开发模式更灵活。</P><br>
          <P>3.3 微服务与SOA区别</P><br>
          <P>微服务，从本质意义上看，还是 SOA 架构。但内涵有所不同，微服务并不绑定某种特殊的技术，在一个微服务的系统中，可以有 Java 编写的服务，也可以有 Python编写的服务，他们是靠Restful架构风格统一成一个系统的。所以微服务本身与具体技术实现无关，扩展性强。</P>
          <br>
          <P style="font-weight: bold">4. 微服务本质</P><br>
          <P>微服务，关键其实不仅仅是微服务本身，而是系统要提供一套基础的架构，这种架构使得微服务可以独立的部署、运行、升级，不仅如此，这个系统架构还让微服务与微服务之间在结构上“松耦合”，而在功能上则表现为一个统一的整体。这种所谓的“统一的整体”表现出来的是统一风格的界面，统一的权限管理，统一的安全策略，统一的上线过程，统一的日志和审计方法，统一的调度方式，统一的访问入口等等。</P>
          <br>
          <P>微服务的目的是有效的拆分应用，实现敏捷开发和部署 。</P><br>
          <P>微服务提倡的理念团队间应该是 inter-operate, not integrate 。inter-operate是定义好系统的边界和接口，在一个团队内全栈，让团队自治，原因就是因为如果团队按照这样的方式组建，将沟通的成本维持在系统内部，每个子系统就会更加内聚，彼此的依赖耦合能变弱，跨系统的沟通成本也就能降低。</P><br>
          <P style="font-weight: bold">5. 什么样的项目适合微服务</P><br>
          <P>微服务可以按照业务功能本身的独立性来划分，如果系统提供的业务是非常底层的，如：操作系统内核、存储系统、网络系统、数据库系统等等，这类系统都偏底层，功能和功能之间有着紧密的配合关系，如果强制拆分为较小的服务单元，会让集成工作量急剧上升，并且这种人为的切割无法带来业务上的真正的隔离，所以无法做到独立部署和运行，也就不适合做成微服务了。</P>
          <br>
          <P>能不能做成微服务，取决于四个要素：</P>
          <P>小：微服务体积小，2 pizza 团队。</P>
          <P>独：能够独立的部署和运行。</P>
          <P>轻：使用轻量级的通信机制和架构。</P>
          <P>松：为服务之间是松耦合的。</P><br>
          <P style="font-weight: bold">6. 微服务折分与设计</P><br>
          <P>1. 从单体式结构转向微服务架构中会持续碰到服务边界划分的问题：比如，我们有user 服务来提供用户的基础信息，那么用户的头像和图片等是应该单独划分为一个新的service更好还是应该合并到user服务里呢?如果服务的粒度划分的过粗，那就回到了单体式的老路;如果过细，那服务间调用的开销就变得不可忽视了，管理难度也会指数级增加。目前为止还没有一个可以称之为服务边界划分的标准，只能根据不同的业务系统加以调节</P>
          <br>
          <P>2. 拆分的大原则是当一块业务不依赖或极少依赖其它服务，有独立的业务语义，为超过2个的其他服务或客户端提供数据，那么它就应该被拆分成一个独立的服务模块。</P><br>
          <P>6.1 微服务设计原则</P><br>
          <P>单一职责原则</P><br>
          <P>意思是每个微服务只需要实现自己的业务逻辑就可以了，比如订单管理模块，它只需要处理订单的业务逻辑就可以了，其它的不必考虑。</P><br>
          <P>服务自治原则</P><br>
          <P>意思是每个微服务从开发、测试、运维等都是独立的，包括存储的数据库也都是独立的，自己就有一套完整的流程，我们完全可以把它当成一个项目来对待。不必依赖于其它模块。</P><br>
          <P>轻量级通信原则</P><br>
          <P>首先是通信的语言非常的轻量，第二，该通信方式需要是跨语言、跨平台的，之所以要跨平台、跨语言就是为了让每个微服务都有足够的独立性，可以不受技术的钳制。</P><br>
          <P>接口明确原则</P><br>
          <P>由于微服务之间可能存在着调用关系，为了尽量避免以后由于某个微服务的接口变化而导致其它微服务都做调整，在设计之初就要考虑到所有情况，让接口尽量做的更通用，更灵活，从而尽量避免其它模块也做调整。</P><br>
          <P style="font-weight: bold">7. 微服务优势与缺点</P><br>
          <P>7.1 特性</P><br>
          <P>1. 每个微服务可独立运行在自己的进程里;</P><br>
          <P>2. 一系列独立运行的微服务共同构建起了整个系统;</P><br>
          <P>3. 每个服务为独立的业务开发，一个微服务一般完成某个特定的功能，比如：订单管理，用户管理等;</P><br>
          <P>4. 微服务之间通过一些轻量级的通信机制进行通信，例如通过REST API或者RPC的方式进行调用。</P><br>
          <P>7.2 特点</P><br>
          <P>易于开发和维护</P><br>
          <P>由于微服务单个模块就相当于一个项目，开发这个模块我们就只需关心这个模块的逻辑即可，代码量和逻辑复杂度都会降低，从而易于开发和维护。</P><br>
          <P>启动较快</P><br>
          <P>这是相对单个微服务来讲的，相比于启动单体架构的整个项目，启动某个模块的服务速度明显是要快很多的。</P><br>
          <P>局部修改容易部署</P><br>
          <P>在开发中发现了一个问题，如果是单体架构的话，我们就需要重新发布并启动整个项目，非常耗时间，但是微服务则不同，哪个模块出现了bug我们只需要解决那个模块的bug就可以了，解决完bug之后，我们只需要重启这个模块的服务即可，部署相对简单，不必重启整个项目从而大大节约时间。</P>
          <br>
          <P>技术栈不受限</P><br>
          <P>比如订单微服务和电影微服务原来都是用java写的，现在我们想把电影微服务改成nodeJs技术，这是完全可以的，而且由于所关注的只是电影的逻辑而已，因此技术更换的成本也就会少很多。</P><br>
          <P>按需伸缩</P><br>
          <P>我们上面说了单体架构在想扩展某个模块的性能时不得不考虑到其它模块的性能会不会受影响，对于我们微服务来讲，完全不是问题，电影模块通过什么方式来提升性能不必考虑其它模块的情况。</P><br>
          <P>7.3 缺点</P><br>
          <P>运维要求较高</P><br>
          <P>对于单体架构来讲，我们只需要维护好这一个项目就可以了，但是对于微服务架构来讲，由于项目是由多个微服务构成的，每个模块出现问题都会造成整个项目运行出现异常，想要知道是哪个模块造成的问题往往是不容易的，因为我们无法一步一步通过debug的方式来跟踪，这就对运维人员提出了很高的要求。</P>
          <br>
          <P>分布式的复杂性</P><br>
          <P>对于单体架构来讲，我们可以不使用分布式，但是对于微服务架构来说，分布式几乎是必会用的技术，由于分布式本身的复杂性，导致微服务架构也变得复杂起来。</P><br>
          <P>接口调整成本高</P><br>
          <P>比如，用户微服务是要被订单微服务和电影微服务所调用的，一旦用户微服务的接口发生大的变动，那么所有依赖它的微服务都要做相应的调整，由于微服务可能非常多，那么调整接口所造成的成本将会明显提高。</P><br>
          <P>重复劳动</P><br>
          <P>对于单体架构来讲，如果某段业务被多个模块所共同使用，我们便可以抽象成一个工具类，被所有模块直接调用，但是微服务却无法这样做，因为这个微服务的工具类是不能被其它微服务所直接调用的，从而我们便不得不在每个微服务上都建这么一个工具类，从而导致代码的重复。</P>
          <br>
          <P style="font-weight: bold">8. Sprint cloud 和 Sprint boot区别</P><br>
          <P>Spring Boot:</P><br>
          <P>旨在简化创建产品级的Spring应用和服务，简化了配置文件，使用嵌入式web服务器，含有诸多开箱即用微服务功能，可以和spring cloud联合部署。</P><br>
          <P>Spring Cloud：</P><br>
          <P>微服务工具包，为开发者提供了在分布式系统的配置管理、服务发现、断路器、智能路由、微代理、控制总线等开发工具包。</P><br>
          <P style="font-weight: bold">二、微服务实践先知</P><br>
          <P>1. 客户端如何访问这些服务?(API Gateway)</P><br>
          <P>传统的开发方式，所有的服务都是本地的，UI可以直接调用，现在按功能拆分成独立的服务，跑在独立的一般都在独立的虚拟机上的 Java进程了。客户端UI如何访问他的?后台有N个服务，前台就需要记住管理N个服务，一个服务下线/更新/升级，前台就要重新部署，这明显不服务我们 拆分的理念，特别当前台是移动应用的时候，通常业务变化的节奏更快。另外，N个小服务的调用也是一个不小的网络开销。还有一般微服务在系统内部，通常是无状态的，用户登录信息和权限管理最好有一个统一的地方维护管理(OAuth)。</P>
          <br>
          <P>所以，一般在后台N个服务和UI之间一般会一个代理或者叫API Gateway，他的作用包括</P><br>
          <P>提供统一服务入口，让微服务对前台透明</P><br>
          <P>聚合后台的服务，节省流量，提升性能</P><br>
          <P>提供安全，过滤，流控等API管理功能</P><br>
          <P>我的理解其实这个API Gateway可以有很多广义的实现办法，可以是一个软硬一体的盒子，也可以是一个简单的MVC框架，甚至是一个Node.js的服务端。他们最重要的作用是为前台(通常是移动应用)提供后台服务的聚合，提供一个统一的服务出口，解除他们之间的耦合，不过API Gateway也有可能成为单点故障点或者性能的瓶颈。</P>
          <br>
          <P style="font-weight: bold">2. 服务之间如何通信?(服务调用)</P><br>
          <P>因为所有的微服务都是独立的Java进程跑在独立的虚拟机上，所以服务间的通行就是IPC(inter process communication)，已经有很多成熟的方案。现在基本最通用的有两种方式。这几种方式，展开来讲都可以写本书，而且大家一般都比较熟悉细节了， 就不展开讲了。</P>
          <br>
          <P>REST(JAX-RS，Spring Boot)</P><br>
          <P>RPC(Thrift, Dubbo)</P><br>
          <P>异步消息调用(Kafka, Notify)</P><br>
          <P>一般同步调用比较简单，一致性强，但是容易出调用问题，性能体验上也会差些，特别是调用层次多的时候。RESTful和RPC的比较也是一个很有意 思的话题。一般REST基于HTTP，更容易实现，更容易被接受，服务端实现技术也更灵活些，各个语言都能支持，同时能跨客户端，对客户端没有特殊的要 求，只要封装了HTTP的SDK就能调用，所以相对使用的广一些。RPC也有自己的优点，传输协议更高效，安全更可控，特别在一个公司内部，如果有统一个的开发规范和统一的服务框架时，他的开发效率优势更明显些。就看各自的技术积累实际条件，自己的选择了。</P>
          <br>
          <P>而异步消息的方式在分布式系统中有特别广泛的应用，他既能减低调用服务之间的耦合，又能成为调用之间的缓冲，确保消息积压不会冲垮被调用方，同时能 保证调用方的服务体验，继续干自己该干的活，不至于被后台性能拖慢。不过需要付出的代价是一致性的减弱，需要接受数据最终一致性;还有就是后台服务一般要 实现幂等性，因为消息发送出于性能的考虑一般会有重复(保证消息的被收到且仅收到一次对性能是很大的考验);最后就是必须引入一个独立的broker，如 果公司内部没有技术积累，对broker分布式管理也是一个很大的挑战。</P>
          <br>
          <P style="font-weight: bold">3. 这么多服务怎么查找?(服务发现)</P> <br>
          <P>在微服务架构中，一般每一个服务都是有多个拷贝，来做负载均衡。一个服务随时可能下线，也可能应对临时访问压力增加新的服务节点。服务之间如何相互 感知?服务如何管理?这就是服务发现的问题了。一般有两类做法，也各有优缺点。基本都是通过zookeeper等类似技术做服务注册信息的分布式管理。当 服务上线时，服务提供者将自己的服务信息注册到ZK(或类似框架)，并通过心跳维持长链接，实时更新链接信息。服务调用者通过ZK寻址，根据可定制算法，找到一个服务，还可以将服务信息缓存在本地以提高性能。当服务下线时，ZK会发通知给服务客户端。</P>
          <br>
          <P>客户端做：优点是架构简单，扩展灵活，只对服务注册器依赖。缺点是客户端要维护所有调用服务的地址，有技术难度，一般大公司都有成熟的内部框架支持，比如Dubbo。</P> <br>
          <P>服务端做：优点是简单，所有服务对于前台调用方透明，一般在小公司在云服务上部署的应用采用的比较多。</P> <br>
          <P style="font-weight: bold">4. 服务挂了怎么办?</P><br>
          <P>分布式最大的特性就是网络是不可靠 的。通过微服务拆分能降低这个风险，不过如果没有特别的保障，结局肯定是噩梦。我们刚遇到一个线上故障就是一个很不起眼的SQL计数功能，在访问量上升 时，导致数据库load彪高，影响了所在应用的性能，从而影响所有调用这个应用服务的前台应用。所以当我们的系统是由一系列的服务调用链组成的时候，我们必须确保任一环节出问题都不至于影响整体链路。相应的手段有很多：</P>
          <br>
          <P>重试机制</P><br>
          <P>限流</P><br>
          <P>熔断机制</P><br>
          <P>负载均衡</P><br>
          <P style="font-weight: bold">5. 微服务需要考虑的问题</P><br>
          <P>这里有一个非常好的总结微服务架构需要考虑的问题，包括</P>
          <P>API Gateway</P>
          <P>服务间调用</P>
          <P>服务发现</P>
          <P>服务容错</P>
          <P>服务部署</P>
          <P>数据调用</P>
        </div>
        <!--文章底部按钮-->
        <div class="articelBtn">
          <el-button round><svg-icon icon-class="zan" fill="#fl0" /> 点赞</el-button>
          <el-button round icon="el-icon-star-off">收藏</el-button>
          <el-button round icon="el-icon-circle-plus-outline">关注作者</el-button>
        </div>
        <hr style="margin: 25px 0;height: 1px;background-color: #999;border: none;">
        <!--评论-->
        <div class="comment">
          <p style="font-weight: bold;margin-bottom: 15px;">评论（{{ commentNumber }}）</p>
          <el-input v-model="textarea" type="textarea" :rows="8" placeholder="请开始你的评论" />
        </div>
      </el-col>
      <!--right-->
      <el-col :span="6">
        <div class="authorIntroduce">
          <el-row style="display: flex;align-items: center">
            <el-col :span="6"><img class="authorIntroImg" src="@/assets/images/u694.png"></el-col>
            <el-col :span="18">
              <el-row style="margin-bottom: 5px;">{{ authorName }}</el-row>
              <el-row style="font-size: 14px;color: #999999"><span style="margin-right: 10px;">文章:{{ articleNumber }}篇</span> <span>粉丝:{{ fans }}人</span></el-row>
            </el-col>
          </el-row>
          <p class="intro">{{ intro }}</p>
          <el-button class="follow" icon="el-icon-plus">关注</el-button>
        </div>
        <related-article />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import relatedArticle from '@/views/developer/children/relatedArticle'

export default {
  components: { relatedArticle },
  data() {
    return {
      articleTitle: '微服务架构的详细介绍',
      authorName: '张三',
      articleTime: '2021-07-21 16:25:53',
      viewNumber: '742',
      infoNumber: '7',
      // abstract: '【摘要】 在介绍微服务时，首先得先理解什么是微服务，顾名思义，微服务得从两个方面去理解',
      commentNumber: '2',
      textarea: '',
      /* right*/
      intro: '实施分享行业动态，传递价值信息，我是社区小助手',
      articleNumber: '1420',
      fans: '2000'
    }
  },
  mounted() {
  },
  methods: {
    goDevPlatForm(flag) {
      this.$router.push({
        name: 'devPlatform',
        params: {
          flag: flag
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

  #app .main-container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;

    .articleTitle {
      font-size: 24px;
      font-weight: bold;
      margin: 25px 0;
      display: block;
    }

    .authorInfo {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999;

      .authorImg {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }

    .articleType {
      padding: 25px 0;

      button {
        color: #525798;
        border-color: #525798;
      }
    }

    .abstract {
      width: 100%;
      height: 104px;
      background: #F6F7FC;
      padding: 30px 20px;
      margin-bottom: 25px;
      color: #666;
    }

    .articleCon{
      line-height: 24px;
    }

    .articelBtn {
      text-align: center;
      margin-top: 25px;

      .el-button:active {
        color: #c7000b;
        border-color: #c7000b;
        outline: none;
      }

      .el-button:hover, .el-button:focus {
        color: #c7000b;
        border-color: #c7000b;
        background-color: #FFF;
      }
    }

    /*right*/
    .authorIntroduce {
      width: 100%;
      background: #F6F7FC;
      padding: 20px;
      margin-bottom: 25px;

      .authorIntroImg {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .intro {
        color: #666;
        font-size: 14px;
        margin: 20px 0
      }

      .follow {
        color: #fff;
        background-color: #c7000b;
        border-color: #c7000b;
        margin: 0 auto;
        display: flex;
      }
    }

  }
</style>
