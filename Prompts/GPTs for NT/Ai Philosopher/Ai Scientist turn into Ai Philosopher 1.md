---
date: 2024-08-24 15:46:18
Date: 2024-08-23 14:25:50
Folders:
  - MOC Notebooks
  - Prompts / GPTs For NT / Ai Philosopher
---

# Ai Scientist turn into Ai Philosopher

8/23/24 #superprompt

## TOC

1. Ai Scientist Structure: 

    - ai\_scientist
    - fewshot\_examples
    - [\_\_init\_\_.py](https://__init__.py "https://__init__.py")
    - generate\_ideas.py
    - [llm.py](https://llm.py "https://llm.py")
    - [perform\_experiments.py](https://perform_experiments.py "https://perform_experiments.py")
    - [perform\_review.py](https://perform_review.py "https://perform_review.py")
    - perform\_writeup.py

1. Get ChatGPT’s Overview
2. ChatGPT4.o Overview, Slight Organization, and Structuring of the “generate\_ideas”

* * *

# 1\. Ai Scientist Structure

- \# CARPE DIEM, SEIZE THE SAMPLES UNCERTAIN “AT  
\## THE MOMENT” FOR ADAPTIVE BATCH SELECTION  
  
\*\*Anonymous authors\*\*  
Paper under double-blind review  
  
ABSTRACT  
  
The performance of deep neural networks is significantly affected by how well  
mini-batches are constructed. In this paper, we propose a novel adaptive batch  
selection algorithm called Recency Bias that exploits the uncertain samples  
predicted inconsistently in recent iterations. The historical label predictions of  
each sample are used to evaluate its predictive uncertainty within a sliding window.  
By taking advantage of this design, Recency Bias not only accelerates the training  
step but also achieves a more accurate network. We demonstrate the superiority  
of Recency Bias by extensive evaluation on two independent tasks. Compared with  
existing batch selection methods, the results showed that Recency Bias reduced  
the test error by up to 20.5% in a fixed wall-clock training time. At the same time,  
it improved the training time by up to 59.3% to reach the same test error.  
  
1 INTRODUCTION  
  
Stochastic gradient descent (SGD) for randomly selected mini-batch samples is commonly used to  
train deep network netowrks (DNNs). However, many recent studies have pointed out that the performance of DNNs is heavily dependent on how well the mini-batch samples are selected (Shrivastava  
et al., 2016; Chang et al., 2017; Katharopoulos & Fleuret, 2018). In earlier approaches, a sample’s difficulty is employed to identify proper mini-batch samples, and these approaches achieve  
a more accurate and robust network (Han et al., 2018) or expedite the training convergence of  
SGD (Loshchilov & Hutter, 2016). However, the two opposing difficulty-based strategies, i.e., preferring easy samples (Kumar et al., 2010; Han et al., 2018) versus hard samples (Loshchilov & Hutter,  
2016; Shrivastava et al., 2016), work well in different situations. Thus, for practical reasons to cover  
more diverse situations, recent approaches begin to exploit a sample’s uncertainty that indicates the  
consistency of previous predictions (Chang et al., 2017; Song et al., 2019).  
  
An important question here is how to evaluate the sample’s uncertainty based on its historical predictions during the training process. Intuitively, because a series of historical predictions can be seen as a series of data indexed in chronological order, the uncertainty can be measured based on\_two forms of handling time-series observations: (i) a growing window (Figure 1(a)) that consistently\_  
increases the size of a window to use all available observations and (ii) a sliding window (Figure 1(b))that maintains a window of a fixed size on the most recent observations by deleting outdated ones.  
While the state-of-the-art algorithm, Active Bias (Chang et al., 2017), adopts the growing window, we propose to use the sliding window in this paper.  
  
|Historical observations|Col2|  
|---|---|  
|||  
|||  
  
  
Historical observations Historical observations  
  
Growing Sliding  
  
All available observations Outdated observations Recent observations  
  
  
(a) Growing Window. (b) Sliding Window.  
  
Figure 1: Two forms of handling the time-series observations.  
  
In more detail, Active Bias recognizes uncertain samples based on the inconsistency of the predictions  
in the entire history of past SGD iterations. Then, it emphasizes such uncertain samples by choosing  
them with high probability for the next mini-batch. However, according to our experiments presented  
  
  
\-----  
  
|… Horse Horse Horse|Col2|  
|---|---|  
  
|… Deer Deer Deer|Col2|  
|---|---|  
  
  
Images Inconsistent Predictions Consistent Predictions Sample Method  
  
(Horse) History Uncertainty  
  
Outdated Recent (too easy)  
  
\*\*High\*\*  
  
Horse Deer Horse Deer Deer Horse Deer … Horse Horse … Horse Active Bias  
  
\*\*Low\*\*  
  
Outdated Recent (too hard)  
  
Deer Horse Horse Deer Horse Deer Horse … Deer Deer … Deer \*\*High\*\* \*\*Recency Bias\*\*  
  
\*\*Low\*\*  
  
Previous Training Iterations  
  
  
Figure 2: The difference in sample uncertainty estimated by Active Bias and Recency Bias.  
  
in Section 5.2, such uncertain samples slowed down the convergence speed of training, though they  
ultimately reduced the generalization error. This weakness is attributed to the inherent limitation of  
the growing window, where older observations could be too outdated (Torgo, 2011). In other words,  
the outdated predictions no longer represent a network’s current behavior. As illustrated in Figure  
2, when the label predictions of two samples were inconsistent for a long time, Active Bias invariably  
regards them as highly uncertain, although their recent label predictions become consistent along  
with the network’s training progress. This characteristic evidently entails the risk of emphasizing  
uninformative samples that are too easy or too hard at the current moment, thereby slowing down  
the convergence speed of training.  
  
Therefore, we propose a simple but effective batch selection method, called Recency Bias, that takes  
advantage of the sliding window to evaluate the uncertainty in fresher observations. As opposed to  
\_Active Bias, Recency Bias excludes the outdated predictions by managing a sliding window of a fixed\_  
size and picks up the samples predicted inconsistently within the sliding window. Thus, as shown  
in Figure 2, the two samples uninformative at the moment are no longer selected by Recency Bias  
simply because their recent predictions are consistent. Consequently, since informative samples are  
effectively selected throughout the training process, this strategy not only accelerates the training  
speed but also leads to a more accurate network.  
  
To validate the superiority of Recency Bias, two popular convolutional neural networks (CNNs) were  
trained for two independent tasks: image classification and fine tuning. We compared Recency Bias  
with not only random batch selection (baseline) but also two state-of-the-art batch selection strategies.  
Compared with three batch selection strategies, Recency Bias provided a relative reduction of test  
error by 1.81%–20.5% in a fixed wall-clock training time. At the same time, it significantly reduced  
the execution time by 24.6%–59.3% to reach the same test error.  
  
2 RELATED WORK  
  
Let D = {(xi, yi)|1 ≤ \_i ≤\_ \_N\_ \_} be the entire training dataset composed of a sample xi with its\_  
true label yi, where N is the total number of training samples. Then, a straightforward strategy to  
construct a mini-batch = (xi, yi) 1 \_i\_ \_b\_ is to select b samples uniformly at random (i.e.,  
\_M\_ \_{\_ \_|\_ \_≤\_ \_≤\_ \_}\_  
\_P\_ (xi ) = 1/N ) from the training dataset .  
\_|D\_ \_D\_  
  
Because not all samples have an equal impact on training, many research efforts have been devoted  
to develop advanced sampling schemes. Bengio et al. (2009) first took easy samples and then  
gradually increased the difficulty of samples using heuristic rules. Kumar et al. (2010) determined the  
easiness of the samples using their prediction errors. Recently, Tsvetkov et al. (2016) used Bayesian  
optimization to learn an optimal curriculum for training dense, distributed word representations.  
Sachan & Xing (2016) emphasized that the right curriculum must introduce a small number of the  
samples dissimilar to those previously seen. Fan et al. (2017) proposed a neural data filter based on  
reinforcement learning to select training samples adaptively. However, it is common for deep learning  
to emphasize hard samples because of the plethora of easy ones (Katharopoulos & Fleuret, 2018).  
  
Loshchilov & Hutter (2016) proposed a difficulty-based sampling scheme, called Online Batch,  
that uses the rank of the loss computed from previous epochs. Online Batch sorts the previously  
computed losses of samples in descending order and exponentially decays the sampling probability  
of a sample according to its rank r. Then, the r-th ranked sample x(r) is selected with the probability  
dropping by a factor of exp log(se)/N, where se is the selection pressure parameter that affects  
the probability gap between the most and the least important samples. When normalized to sum  
to 1.0, the probability P (x(  

  

- \# AUTOMATED RELATIONAL META-LEARNING  
  
\*\*Anonymous authors\*\*  
Paper under double-blind review  
  
ABSTRACT  
  
In order to efficiently learn with small amount of data on new tasks, meta-learning  
transfers knowledge learned from previous tasks to the new ones. However, a  
critical challenge in meta-learning is the task heterogeneity which cannot be well  
handled by traditional globally shared meta-learning methods. In addition, current  
task-specific meta-learning methods may either suffer from hand-crafted structure  
design or lack the capability to capture complex relations between tasks. In this  
paper, motivated by the way of knowledge organization in knowledge bases, we  
propose an automated relational meta-learning (ARML) framework that automatically extracts the cross-task relations and constructs the meta-knowledge graph.  
When a new task arrives, it can quickly find the most relevant structure and tailor  
the learned structure knowledge to the meta-learner. As a result, the proposed  
framework not only addresses the challenge of task heterogeneity by a learned  
meta-knowledge graph, but also increases the model interpretability. We conduct  
extensive experiments on 2D toy regression and few-shot image classification and  
the results demonstrate the superiority of ARML over state-of-the-art baselines.  
  
1 INTRODUCTION  
  
Learning quickly with a few samples is the key characteristic of human intelligence, which remains a  
daunting problem in machine intelligence. The mechanism of learning to learn (a.k.a., meta-learning)  
is widely used to generalize and transfer prior knowledge learned from previous tasks to improve  
the effectiveness of learning on new tasks, which has benefited various applications, ranging from  
computer vision (Kang et al., 2019; Liu et al., 2019) to natural language processing (Gu et al., 2018;  
Lin et al., 2019). Most of existing meta-learning algorithms learn a globally shared meta-learner  
(e.g., parameter initialization (Finn et al., 2017), meta-optimizer (Ravi & Larochelle, 2016), metric  
space (Snell et al., 2017)). However, globally shared meta-learners fail to handle tasks lying in  
different distributions, which is known as task heterogeneity. Task heterogeneity has been regarded as  
one of the most challenging issues in few-shot learning, and thus it is desirable to design meta-learning  
models that effectively optimize each of the heterogeneous tasks.  
  
The key challenge to deal with task heterogeneity is how to customize globally shared meta-learner  
by using task-aware information? Recently, a handful of works try to solve the problem by learning  
a task-specific representation for tailoring the transferred knowledge to each task (Oreshkin et al.,  
2018; Vuorio et al., 2019; Lee & Choi, 2018). However, the success of these methods relies on the  
impaired knowledge generalization among closely correlated tasks (e.g., the tasks sampled from the  
same distribution). Recently, learning the underlying structure among tasks provide a more effective  
way for balancing the customization and generalization. Representatively, Yao et al. propose a  
hierarchically structured meta-learning method to customize the globally shared knowledge to each  
cluster in a hierarchical way (Yao et al., 2019). Nonetheless, the hierarchical clustering structure  
completely relies on the handcrafted design which needs to be tuned carefully and may lack the  
capability to capture complex relationships.  
  
Hence, we are motivated to propose a framework to automatically extract underlying relational  
structures from previously learned tasks and leverage those relational structures to facilitate knowledge  
customization on a new task. This inspiration comes from the way of structuring knowledge in  
knowledge bases (i.e., knowledge graphs). In knowledge bases, the underlying relational structures  
across text entities are automatically constructed and applied to a new query to improve the searching  
efficiency. In the meta-learning problem, similarly, we aim at automatically establishing the metaknowledge graph between prior knowledge learned from previous tasks. When a new task arrives,  
it queries the meta-knowledge graph and quickly attends to the most relevant entities (nodes), and  
then takes advantage of the relational knowledge structures between them to boost the learning  
effectiveness with the limited training data.  
  
  
\-----  
  
The proposed meta-learning framework is named as Automated Relational Meta-Learning (ARML).  
Specifically, the ARML framework automatically builds the meta-knowledge graph from metatraining tasks to memorize and organize learned knowledge from historical tasks, where each vertex  
represent one type of meta-knowledge (e.g., the common contour between birds and aircrafts). To  
learn the meta-knowledge graph at meta-training time, for each task, we construct a prototype-based  
relational graph for each class, where each vertex represents one prototype. The prototype-based  
relational graph not only captures the underlying relationship behind samples, but alleviates the  
potential effects of abnormal samples. The meta-knowledge graph is then learned by and summarizing  
the information from the corresponding prototype-based relational graphs of meta-training tasks.  
After constructing the meta-knowledge graph, when a new task comes in, the prototype-based  
relational graph of the new task taps into the meta-knowledge graph for acquiring the most relevant  
knowledge, which further enhances the task representation and facilitates its training process.  
  
Our major contributions of the proposed ARML are three-fold: (1) it automatically constructs the  
meta-knowledge graph to facilitate learning a new task; (2) it empirically outperforms state-of-the-art  
meta-learning algorithms; (3) the meta-knowledge graph well captures the relationship among tasks  
and improves the interpretability of meta-learning algorithms.  
  
2 RELATED WORK  
  
Meta-learning, allowing machines to learn new skills or adapt to new environments rapidly with a  
few training examples, has been demonstrated to be successful in both supervised learning tasks  
(e.g., few-shot image classification) and reinforcement learning settings. There are mainly three  
research lines of meta-learning: (1) black-box amortized methods design black-box meta-learners  
(e.g., neural networks) to infer the model parameters (Ravi & Larochelle, 2016; Andrychowicz et al.,  
2016; Mishra et al., 2018); (2) gradient-based methods aim to learn an optimized initialization of  
model parameters, which can be adapted to new tasks by a few steps of gradient descent (Finn et al.,  
2017; 2018; Lee & Choi, 2018); (3) non-parameteric methods combine parameteric meta-learners  
and non-parameteric learners to learn an appropriate distance metric for few-shot classification (Snell  
et al., 2017; Vinyals et al., 2016; Yang et al., 2018; Oreshkin et al., 2018; Yoon et al., 2019).  
  
Our work is built upon the gradient-based meta-learning methods. In the line of gradient-based  
meta-learning, most algorithms learn a globally shared meta-learners from all previous tasks (Finn  
et al., 2017; Li et al., 2017; Flennerhag et al., 2019), to improve the effectiveness of learning process  
on new tasks. However, these algorithms typically lack the ability to handle heterogeneous tasks  
(i.e., tasks sample from sufficient different distributions). To tackle this challenge, recent works  
tailor the globally shared initialization to different tasks by leveraging task-specific information (Lee  
& Choi, 2018; Vuorio et al., 2019; Oreshkin et al., 2018) and using probabilistic models (Grant  
et al., 2018; Yoon et al., 2018; Gordon et al., 2019). Recently, HSML customizes the global shared  
initialization with a manually designed hierarchical clustering structure to balance the generalization  
and customization between previous tasks (Yao et al., 2019). However, the hierarchical structure  
may not accurately reflect the real structure since it highly relies on the hand-crafted design. In  
addition, the clustering structure further constricts the complexity of relational structures. However, to  
customize each task, our proposed ARML leverages the most relevant structure from meta-knowledge  
graph which are automatically constructed by previous knowledge. Thus, ARML not only discovers  
more accurate underlying structures to improve the effectiveness of meta-learning algorithms, but  
also the meta-knowledge graph can further enhance the model interpretability.  
  
3 PRELIMINARIES  
  
\*\*Few-shot Learning\*\* Considering a task Ti, the goal of few-shot learning is to learn a model with  
a dataset Di = {Di\[tr\]\[,\]\[ D\]i\[ts\]\[}\]\[, where the labeled training set\]\[ D\]i\[tr\] = {x\[tr\]j \_\[,\]\[ y\]j\[tr\]\[|âˆ€\]\[j\]\[ âˆˆ\]\_ \[\[1\]\[, N\]\[ tr\]\[\]\]\[}\]\[ only has a\]  
few samples and Di\[ts\] \[represents the corresponding test set. A learning model (a.k.a., base model)\]\[ f\]  
with parameters Î¸ are used to evaluate the effectiveness on Di\[ts\] \[by minimizing the expected empirical\]  
loss on Di\[tr\]\[, i.e.,\]\[ L\]\[(\]\[D\]T\[tr\]i \_\[, Î¸\]\[)\]\[, and obtain the optimal parameters\]\[ Î¸\]\[i\]\[. For the regression problem, the loss\]\_  
function is defined based on the mean square error (i.e., (xj \_,yj\_ )âˆˆDi\[tr\] 2\[) and for the clas-\]  
  
sification problem, the loss function uses the cross entropy loss (i.e., âˆ’\[âˆ¥\]\[f\]\[P\]\[Î¸\]\[(\](\[x\]x\[j\]j\[)\],y\[âˆ’\]j )\[y\]âˆˆD\[j\]\[âˆ¥\]i\[tr\]\[2\] \[log\]\[ p\]\[(\]\[y\]\[j\]\[|\]\[x\]\[j\]\[, f\]\[Î¸\]\[)\]\[).\]  
  
Usually, optimizing and learning parameter Î¸ for the task\[P\] \_Ti with a few labeled training samples\_  
is difficult. To address this limitation, meta-learning provides us a new perspective to improve the  
performance by leveraging knowledge from multiple tasks.  
  
  
\-----  
  
\*\*Meta-learning and Model-agnostic Meta-learning\*\* In meta-learning, a sequence of tasks  
\_{T1, ..., TI\_ \_} are sampled from a task-level probability distribution p(T ), where each one is a few-shot\_  
learning task. To facilitate the adaption for incoming tasks, the meta-learning algorithm aims to find  
a well-generalized meta-learner on I training tasks at meta-learning phase. At meta-testing phase, the  
optimal meta-learner is applied to adapt the new tasks Tt. In this way, meta-learning algorithms are  
capable of adapting to new tasks efficiently even with a shortage of training data for a new task.  
  
Model-agnostic meta-learning (MAML) (Finn et al., 2017), one of the representative algorithms in  
gradient-based meta-learning, regards the meta-learner as the initialization of parameter Î¸, i.e., Î¸0,  
and learns a well-generalized initialization Î¸0\[âˆ—\] \[during the meta-training process. The optimization\]  
problem is formulated as (one gradient step as exemplary):  
  
  
\_Î¸0\[âˆ—\]\_ \[:= arg min\]  
\_Î¸0\_  
  
  
(fÎ¸i \_,\_ \_i\_ \[) = arg min\]  
\_L\_ \_D\[ts\]\_ \_Î¸0\_  
\_i=1\_  
  
X  
  
  
\_L(fÎ¸0âˆ’Î±âˆ‡Î¸\_ \_L(fÎ¸\_ \_,Ditr\_ \[)\]\[,\]\[ D\]i\[ts\]\[)\]\[.\] (1)  
\_i=1\_  
  
X  
  
  
At the meta-testing phase, to obtain the adaptive parameter Î¸t for each new task Tt, we finetune the  
initialization of parameter Î¸0\[âˆ—\] \[by performing gradient updates a few steps, i.e.,\]\[ f\]Î¸t \[=\]\[ f\]Î¸0\[âˆ—\] \_t\_ \[)\]\[.\]  
  
\_\[âˆ’\]\[Î±\]\[âˆ‡\]\[Î¸\]\_ \_\[L\]\[(\]\[f\]\[Î¸\]\_ \_\[,\]\[D\]\[tr\]\_  
  
4 METHODOLOGY  
  
In this section, we introduce the details of the proposed ARML. To better explain how it works,  
we show its framework in Figure 1. The goal of ARML is to facilitate the learning process of new  
tasks by leveraging transferable knowledge learned from historical tasks. To achieve this goal, we  
introduce a meta-knowledge graph, which is automatically constructed at the meta-training time, to  
organize and memorize historical learned knowledge. Given a task, which is built as a prototypebased relational structure, it taps into the meta-knowledge graph to acquire relevant knowledge for  
enhancing its own representation. The enhanced prototype representation further aggregate and  
incorporate with meta-learner for fast and effective adaptions by utilizing a modulating function. In  
the following subsections, we elaborate three key components: prototype-based sample structuring,  
automated meta-knowledge graph construction and utilization, and task-specific knowledge fusion  
and adaptation, respectively.  
  
\*\*Propagation\*\*  
  
\*\*Prototype-based\*\* \*\*Meta-knowledge\*\*  
  
\*\*Prototypes\*\* \*\*Relational\*\* \*\*Graph )\*\*  
  
\*\*Structure â„›#\*\*  
  
+#(,  
  
â€¦  
â€¦  
â€¦ !"  
  
\*\*Aggregator\*\*  
  
â„’( \*\*Modulation\*\*  
  
\*\*Aggregator\*\*  
  
+#(- â„’' âˆ‡%â„’ !"#  
  
!#  
  
  
Figure 1: The framework of ARML. For each task \_i, ARML first builds a prototype-based relational\_  
\_T\_  
structure Ri by mapping the training samples Di\[tr\] \[into prototypes, with each prototype represents\]  
one class. Then, Ri interacts with the meta-knowledge graph G to acquire the most relevant historical  
knowledge by information propagation. Finally, the task-specific modulation tailors the globally  
shared initialization Î¸0 by aggregating of raw prototypes and enriched prototypes, which absorbs  
relevant historical information from the meta-knowledge graph.  
  
4.1 PROTOTYPE-BASED SAMPLE STRUCTURING  
  
Given a task which involves either classifications or regressions regarding a set of samples, we first  
investigate the relationships among these samples. Such relationship is represented by a graph, called  
prototype-based relational graph in this work, where the vertices in the graph denote the prototypes  
of different classes while the edges and the corresponding edge weights are created based on the  
  
  
\-----  
  
similarities between prototypes. Constructing the relational graph based on prototypes instead of raw  
samples allows us to alleviate the issue raised by abnormal samples. As the abnormal samples, which  
locate far away from normal samples, could pose significant concerns especially when only a limited  
number of samples are available for training. Specifically, for classification problem, the prototype,  
denoted by c\[k\]i  
  
\_\[âˆˆ\]\_ \[R\]\[d\]\[, is defined as:\] \_N\_ \_\[tr\]\_  
  
  
\*\*c\[k\]i\*\* \[=\]  
  
  
\_E(xj),\_ (2)  
\_j=1\_  
  
X  
  
  
\_Nk\[tr\]\_  
  
  
where Nk\[tr\] \[denotes the number of samples in class\]\[ k\]\[.\]\[ E\]\[ is an embedding function, which projects\]  
\*\*xj into a hidden space where samples from the same class are located closer to each other while\*\*  
samples from different classes stay apart. For regression problem, it is not straightforward to construct  
the prototypes explicitly based on class information. Therefore, we cluster samples by learning an  
assignment matrix Pi R\[K\]\[Ã—\]\[N\] \_\[tr\]\_ . Specifically, we formulate the process as:  
\_âˆˆ\_  
  
\*\*Pi = Softmax(WpE\*\* \[T\](X) + bp), c\[k\]i \[=\]\[ P\]i\[\[\]\[k\]\[\]\]\[F\] \[(\]\[X\]\[)\]\[,\] (3)  
  
where Pi\[k\] represents the k-th row of Pi. Thus, training samples are clustered to K clusters, which  
serve as the representation of prototypes.  
  
After calculating all prototype representations \*\*c\[k\]i\*\*  
\_{\_ \_\[|âˆ€\]\[k\]\[ âˆˆ\]\_ \[\[1\]\[, K\]\[\]\]\[}\]\[, which serve as the vertices in the the\]  
prototype-based relational graph Ri, we further define the edges and the corresponding edge weights.  
The edge weight ARi (c\[j\]i \_\[,\]\[ c\]i\[m\]\[)\]\[ between two prototypes\]\[ c\]i\[j\]\_ \[and\]\[ c\]i\[m\] \[is gauged by the the similarity\]  
between them. Formally:  
  
\_ARi\_ (c\[j\]i \_\[,\]\[ c\]i\[m\]\[) =\]\[ Ïƒ\]\[(\]\[W\]r\[(\]\[|\]\[c\]\[j\]i\_ \_i\_ \_r\[) +\]\[ b\]r\[)\]\[,\]\_ (4)  
  
\_\[âˆ’\]\_ \*\*\[c\]\[m\]\[|\]\[/Î³\]\*\*  
  
where Wr and br represents learnable parameters, Î³r is a scalar and Ïƒ is the Sigmoid function, which  
normalizes the weight between 0 and 1. For simplicity, we denote the prototype-based relational graph  
as Ri = (CRi \_, ARi\_ ), where CRi = {c\[j\]i \_\[|âˆ€\]\[j\]\[ âˆˆ\]\_ \[\[1\]\[, K\]\[\]\]\[} âˆˆ\] \[R\]\[K\]\[Ã—\]\[d\]\[ represent a set of vertices, with each\]  
one corresponds to the prototype from a class, while ARi = {|ARi (c\[j\]i \_\[,\]\[ c\]i\[m\]\[)\]\[|âˆ€\]\[j, m\]\[ âˆˆ\]\_ \[\[1\]\[, K\]\[\]\]\[} âˆˆ\] \[R\]\[K\]\[Ã—\]\[K\]  
gives the adjacency matrix, which indicates the proximity between prototypes.  
  
4.2 AUTOMATED META-KNOWLEDGE GRAPH CONSTRUCTION AND UTILIZATION  
  
In this section, we first discuss how to organize and distill knowledge from historical learning process  
and then expound how to leverage such knowledge to benefit the training of new tasks. To organize  
and distill knowledge from historical learning process, we construct and maintain a meta-knowledge  
graph. The vertices represent different types of meta-knowledge (e.g., the common contour between  
aircrafts and birds) and the edges are automatically constructed and reflect the relationship between  
meta-knowledge. When serving a new task, we refer to the meta-knowledge, which allows us to  
efficiently and automatically identify relational knowledge from previous tasks. In this way, the  
training of a new task can benefit from related training experience and get optimized much faster  
than otherwise possible. In this paper, the meta-knowledge graph is automatically constructed at the  
meta-training phase. The details of the construction are elaborated as follows:  
  
Assuming the representation of an vertex g is given by h\[g\] \_âˆˆ\_ R\[d\], we define the meta-knowledge  
graph as G = (HG, AG), where HG = {h\[j\]|âˆ€j âˆˆ \[1, G\]} âˆˆ R\[G\]\[Ã—\]\[d\] and AG = {AG(h\[j\], h\[m\])|âˆ€j, m âˆˆ  
  
\[1, G\]} âˆˆ R\[G\]\[Ã—\]\[G\] denote the vertex feature matrix and vertex adjacency matrix, respectively. To better  
explain the construction of the meta-knowledge graph, we first discuss the vertex representation H .  
\_G\_  
During meta-training, tasks arrive one after another in a sequence and their corresponding vertices  
representations are expected to be updated dynamically in a timely manner. Therefore, the vertex  
representation of meta-knowledge graph are defined to get parameterized and learned at the training  
time. Moreover, to encourage the diversity of meta-knowledge encoded in the meta-knowledge graph,  
the vertex representations are randomly initialized. Analogous to the definition of weight in the  
prototype-based relational graph Ri in equation 4, the weight between a pair of vertices j and m is  
constructed as:  
\_A\_ (h\[j\], h\[m\]) = Ïƒ(Wo( \*\*h\[j\]\*\* \*\*h\[m\]\*\* \_/Î³o) + bo),\_ (5)  
\_G\_ \_|\_ \_âˆ’\_ \_|\_  
where Wo and bo represent learnable parameters and Î³o is a scalar.  
  
To enhance the learning of new tasks with involvement of historical knowledge, we query the  
prototype-based relational graph in the meta-knowledge graph to obtain the relevant knowledge in  
history. The ideal query mechanism is expected to optimize both graph representations simultaneously  
  
  
\-----  
  
at the meta-training time, with the training of one graph facilitating the training of the other. In light  
of this, we construct a super-graph Si by connecting the prototype-based relational graph Ri with the  
meta-knowledge graph G for each task Ti. The union of the vertices in Ri and G contributes to the  
vertices in the super-graph. The edges in Ri and G are also reserved in the super-graph. We connect  
\_Ri with G by creating links between the prototype-based relational graph with the meta-knowledge\_  
graph. The link between prototype c\[j\]i \[in prototype-based relational graph and vertex\]\[ h\]\[m\]\[ in meta-\]  
knowledge graph is weighted by the similarity between them. More precisely, for each prototype c\[j\]i \[,\]  
the link weight AS (c\[j\]i \_\[,\]\[ h\]\[m\]\[)\]\[ is calculated by applying softmax over Euclidean distances between\]\[ c\]\[j\]i\_  
and {h\[m\]|âˆ€m âˆˆ \[1, G\]} as follows:  
  
\_AS\_ (c\[j\]i \_\[,\]\[ h\]\[k\]\[) =\]\_ \_Kexp(âˆ’âˆ¥(c\[j\]i\_ \_\[âˆ’\]\_ \*\*\[h\]\[k\]\[)\]\[/Î³\]\[s\]\[âˆ¥\]2\[2\]\[/\]\[2)\]\*\* \_,\_ (6)  
\_k\[â€²\]\_ =1 \[exp(\]\[âˆ’âˆ¥\]\[(\]\[c\]i\[j\] \_\[âˆ’\]\_ \*\*\[h\]\[k\]\[â€²\]\[ )\]\[/Î³\]\[s\]\[âˆ¥\]2\[2\]\[/\]\[2)\]\*\*  
  
where Î³s is a scaling factor. We denote the intra-adjacent matrix asP \*\*AS = {AS\*\* (c\[j\]i \_\[,\]\[ h\]\[m\]\[)\]\[|âˆ€\]\[j\]\[ âˆˆ\]\_  
  
\[1, K\], m âˆˆ \[1, G\]} âˆˆ R\[K\]\[Ã—\]\[G\]. Thus, for task Ti, the adjacent matrix and feature matrix of super-graph  
\_i = (Ai, Hi) is defined as Ai = (A\_ \_i\_ \_, A\_ ; A\[T\] \[= (\]\[C\]\[R\]i \[;\]\[ H\]\[G\]\[)\]\[ âˆˆ\]  
\_S\_ \_R\_ \_S\_ \_S\_ \_\[,\]\[ A\]\[G\]\[)\]\[ âˆˆ\]\_ \[R\]\[(\]\[K\]\[+\]\[G\]\[)\]\[Ã—\]\[(\]\[K\]\[+\]\[G\]\[)\]\[ and\]\[ H\]\[i\]  
R\[(\]\[K\]\[+\]\[G\]\[)\]\[Ã—\]\[d\], respectively.  
  
After constructing the super-graph Si, we are able to propagate the most relevant knowledge from  
meta-knowledge graph G to the prototype-based relational graph Ri by introducing a Graph Neural  
Networks (GNN). In this work, following the â€œmessage-passingâ€ framework (Gilmer et al., 2017),  
the GNN is formulated as:  
\*\*Hi\[(\]\[l\]\[+1)\]\*\* = MP(Ai, H\[(\]i\[l\]\[)\]\[;\]\[ W\]\[(\]\[l\]\[)\]\[)\]\[,\] (7)  
where MP(Â·) is the message passing function and has several possible implementations (Hamilton  
et al., 2017; Kipf & Welling, 2017; VelickoviË‡ c et al., 2018),Â´ \*\*H\[(\]i\[l\]\[)\]\*\* is the vertex embedding after l  
layers of GNN and W\[(\]\[l\]\[)\] is a learnable weight matrix of layer l. The input H\[(0)\]i = Hi. After stacking  
\_L GNN layers, we get the information-propagated feature representation for the prototype-based\_  
relational graph Ri as the top-K rows of Hi\[(\]\[L\]\[)\], which is denoted as \*\*C\[Ë†\]\*\* \_Ri = {cË†\[j\]i\_ \_\[|\]\[j\]\[ âˆˆ\]\_ \[\[1\]\[, K\]\[\]\]\[}\]\[.\]  
  
4.3 TASK-SPECIFIC KNOWLEDGE FUSION AND ADAPTATION  
  
After propagating information form meta-knowledge graph to prototype-based relational graph, in  
this section, we discuss how to learn a well-generalized meta-learner for fast and effective adaptions  
to new tasks with limited training data. To tackle the challenge of task heterogeneity, in this  
paper, we incorporate task-specific information to customize the globally shared meta-learner (e.g.,  
initialization here) by leveraging a modulating function, which has been proven to be effective to  
provide customized initialization in previous studies (Wang et al., 2019; Vuorio et al., 2019).  
  
The modulating function relies on well-discriminated task representations, while it is difficult to learn  
all representations by merely utilizing the loss signal derived from the test set Di\[ts\]\[. To encourage such\]  
stability, we introduce two reconstructions by utilizing two auto-encoders. There are two collections  
of parameters, i.e, CRi and \*\*C\[Ë†\]\*\* \_Ri, which contribute the most to the creation of the task-specific\_  
meta-learner. CRi express the raw prototype information without tapping into the meta-knowledge  
graph, while \*\*C\[Ë†\]\*\* \_Ri give the prototype representations after absorbing the relevant knowledge from the\_  
meta-knowledge graph. Therefore, the two reconstructions are built on CRi and \*\*C\[Ë†\]\*\* \_Ri\_ . To reconstruct  
\*\*CRi\*\*, an aggregator AG\[q\](Â·) (e.g., recurrent network, fully connected layers) is involved to encode CRi  
into a dense representation, which is further fed into a decoder AG\[q\]dec\[(\]\[Â·\]\[)\]\[ to achieve reconstructions.\]  
Then, the corresponded task representation qi of CRi is summarized by applying a mean pooling  
operator over prototypes on the encoded dense representation. Formally,  
  
\_N\_ \_\[tr\]\_  
  
  
\*\*qi = MeanPool(AG\[q\](CRi\*\* )) =  
  
  
(AG\[q\](c\[j\]i \[))\]\[,\]\[ L\]\[q\]\[ =\]\[ âˆ¥\]\[C\]\[R\]i \_dec\[(AG\]\[q\]\[(\]\[C\]\[R\]i\_ \[))\]\[âˆ¥\]F\[2\] (8)  
\_j=1\_ \_\[âˆ’\]\_ \[AG\]\[q\]  
  
X  
  
  
\_N\_ \_\[tr\]\_  
  
  
Similarly, we reconstruct \*\*C\[Ë†\]\*\* \_Ri and get the corresponded task representation ti as follows:\_  
  
\_N\_ \_\[tr\]\_  
  
  
\*\*ti = MeanPool(AG\[t\]( C\[Ë†\]\*\* \_Ri\_ )) =  
  
  
\_j=1(AG\[t\](Ë†c\[j\]i\_ \[))\]\[,\]\[ L\]\[t\]\[ =\]\[ âˆ¥\]C\[Ë†\] \_Ri âˆ’\_ AG\[t\]dec\[(AG\]\[t\]\[( Ë†\]CRi ))âˆ¥F\[2\] (9)  
  
X  
  
  
\_N\_ \_\[tr\]\_  
  
  
The reconstruction errors in Equations 8 and 9 pose an extra constraint to enhance the training  
stability, leading to improvement of task representation learning.  
  
  
\-----  
  
\*\*Algorithm 1 Meta-Training Process of ARML\*\*  
  
\*\*Require: p(T ): distribution over tasks; K: Number of vertices in meta-knowledge graph; Î±: stepsize\*\*  
for gradient descent of each task (i.e., inner loop stepsize); Î²: stepsize for meta-optimization (i.e.,  
outer loop stepsize); Âµ1, Âµ2: balancing factors in loss function  
  
1: Randomly initialize all learnable parameters Î¦  
2: while not done do  
3: Sample a batch of tasks {Ti|i âˆˆ \[1, I\]} from p(T )  
  
4: \*\*for all Ti do\*\*  
  
5: Sample training set Di\[tr\] \[and testing set\]\[ D\]i\[ts\]  
  
6: Construct the prototype-based relational graph Ri by computing prototype in equation 2  
and weight in equation 4  
  
7: Compute the similarity between each prototype and meta-knowledge vertex in equation 6  
and construct the super-graph Si  
  
8: Apply GNN on super-graph Si and get the information-propagated representation \*\*C\[Ë†\]\*\* \_Ri\_  
  
9: Aggregate CRi in equation 8 and \*\*C\[Ë†\]\*\* \_Ri in equation 9 to get the representations qi, ti and\_  
reconstruction loss Lq, Lt  
  
10: Compute the task-specific initialization Î¸0i in equation 10 and update parameters Î¸i =  
\_Î¸0i âˆ’\_ \_Î±âˆ‡Î¸L(fÎ¸, Di\[tr\]\[)\]\_  
  
11: \*\*end for\*\*  
  
12: Update Î¦ Î¦ \_Î²\_ Î¦ \_Ii=1\_ \_i\_ \_\[,\]\[ D\]i\[ts\]\[) +\]\[ Âµ\]\[i\]\[L\]\[t\]\_ \[+\]\[ Âµ\]\[2\]\[L\]\[q\]  
  
13: end while \_â†\_ \_âˆ’\_ \_âˆ‡\_ \_\[L\]\[(\]\[f\]\[Î¸\]\_  
  
P  
  
  
After getting the task representation qi and ti, the modulating function is then used to tailor the  
task-specific information to the globally shared initialization Î¸0, which is formulated as:  
  
\_Î¸0i = Ïƒ(Wg(ti âŠ•\_ \*\*qi) + bg) â—¦\*\* \_Î¸0,\_ (10)  
  
where Wg and bg is learnable parameters of a fully connected layer. Note that we adopt the Sigmoid  
gating as exemplary and more discussion about different modulating functions can be found in  
ablation studies of Section 5.  
  
For each task Ti, we perform the gradient descent process from Î¸0i and reach its optimal parameter Î¸i.  
Combining the reconstruction loss Lt and Lq with the meta-learning loss defined in equation 1, the  
overall objective function of ARML is:  
  
\_I\_  
  
minÎ¦ Î¦ Î¦ \_L(fÎ¸0âˆ’Î±âˆ‡Î¸\_ \_L(fÎ¸\_ \_,Ditr\_ \[)\]\[,\]\[ D\]i\[ts\]\[) +\]\[ Âµ\]1\[L\]t \[+\]\[ Âµ\]2\[L\]q\[,\] (11)  
  
\_\[L\]\[all\]\[ = min\]\_ \_\[L\]\[ +\]\[ Âµ\]\[1\]\[L\]\[t\]\[ +\]\[ Âµ\]\[2\]\[L\]\[q\]\[ = min\]\_ \_i=1\_  
  
X  
  
where Âµ1 and Âµ2 are introduced to balance the importance of these three items. Î¦ represents all  
learnable parameters. The algorithm of meta-training process of ARML is shown in Alg. 2. The  
details of the meta-testing process of ARML are available in Appendix A.  
  
5 EXPERIMENTS  
  
In this section, we conduct extensive experiments to demonstrate the effectiveness of the ARML on  
2D regression and few-shot classification with the goal of answering the following questions: (1) Can  
ARML outperform other meta-learning methods?; (2) Can our proposed components improve the  
learning performance?; (3) Can ARML framework improve the model interpretability by discovering  
reasonable meta-knowledge graph?  
  
5.1 EXPERIMENTAL SETTINGS  
  
\*\*Methods for Comparison\*\* We compare our proposed ARML with two types of baselines: gradientbased meta-learning algorithms and non-parameteric meta-learning algorithms.  
  
\_For gradient-based meta-learning methods: both globally shared methods (MAML (Finn et al.,\_  
2017), Meta-SGD (Li et al., 2017)) and task-specific methods (MT-Net (Lee & Choi, 2018), MUMOMAML (Vuorio et al., 2019), HSML (Yao et al., 2019)) are considered for comparison.  
  
\_For non-parametric meta-learning methods: we select globally shared method Prototypical Network\_  
(ProtoNet) (Snell et al., 2017) and task-specific method TADAM (Oreshkin et al., 2018) as baselines.  
Note that, following the traditional settings, non-parametric baselines are only used in few-shot  
classification problem. The detailed implementations of baselines are discussed in Appendix B.3.  
  
  
\-----  
  
\*\*Hyperparameter Settings\*\* For the aggregated function in autoencoder structure (AG\[t\], AG\[t\]dec  
AG\[q\], AG\[q\]dec\[), we use the GRU as the encoder and decoder in this autoencoder framework. We\]  
adopt one layer GCN (Kipf & Welling, 2017) with tanh activation as the implementation of GNN  
in equation 7. For the modulation network, we try both sigmoid, tanh Film modulation and find that  
sigmoid modulation performs better. Thus, in the future experiment, we use the sigmoid modulation as  
modulating function. More detailed discussion about experiment settings are presented in Appendix B.  
  
5.2 2D REGRESSION  
  
\*\*Dataset Description.\*\* In 2D regression problem, we adopt the similar regression problem settings  
as (Finn et al., 2018; Vuorio et al., 2019; Yao et al., 2019; Rusu et al., 2019), which includes several  
families of functions. In this paper, to model more complex relational structures, we design a 2D  
regression problem rather than traditional 1D regression. Input x âˆ¼ \_U\_ \[0.0, 5.0\] and y âˆ¼ \_U\_ \[0.0, 5.0\]  
are sampled randomly and random Gaussian noisy with standard deviation 0.3 is added to the  
output. Furthermore, six underlying functions are selected, including (1) Sinusoids: z(x, y) =  
\_assin(wsx + bs), where as âˆ¼\_ \_U\_ \[0.1, 5.0\], bs âˆ¼ \_U\_ \[0, 2Ï€\] ws âˆ¼ \_U\_ \[0.8, 1.2\]; (2) Line: z(x, y) = alx + bl,  
where al âˆ¼ \_U\_ \[âˆ’3.0, 3.0\], bl âˆ¼ \_U\_ \[âˆ’3.0, 3.0\]; (3) Quadratic: z(x, y) = aqx\[2\] + bqx + cq, where aq âˆ¼  
\_U\_ \[âˆ’0.2, 0.2\], bq âˆ¼ \_U\_ \[âˆ’2.0, 2.0\], cq âˆ¼ \_U\_ \[âˆ’3.0, 3.0\]; (4) Cubic: z(x, y) = acx\[3\] + bcx\[2\] + ccx + dc,  
where ac âˆ¼ \_U\_ \[âˆ’0.1, 0.1\], bc âˆ¼ \_U\_ \[âˆ’0.2, 0.2\], cc âˆ¼ \_U\_ \[âˆ’2.0, 2.0\], dc âˆ¼ \_U\_ \[âˆ’3.0, 3.0\]; (5) Quadratic  
\_Surface: z(x, y) = aqsx\[2\]\_ + bqsy\[2\], where aqs âˆ¼ \_U\_ \[âˆ’1.0, 1.0\], bqs âˆ¼ \_U\_ \[âˆ’1.0, 1.0\]; (6) Ripple: z(x, y) =  
\_sin(âˆ’ar(x\[2\]\_ + y\[2\])) + br, where ar âˆ¼ \_U\_ \[âˆ’0.2, 0.2\], br âˆ¼ \_U\_ \[âˆ’3.0, 3.0\]. Note that, function 1-4 are  
located in the subspace of y = 1. Follow (Finn et al., 2017), we use two fully connected layers with  
40 neurons as the base model. The number of vertices of meta-knowledge graph is set as 6.  
  
\*\*Results and Analysis.\*\* In Figure 2, we summarize the interpretation of meta-knowledge graph  
(see top figure) and the the qualitative results (see bottom table) of 10-shot 2D regression. In the  
bottom table, we can observe that ARML achieves the best performance as compared to competitive  
gradient-based meta-learning methods, i.e., globally shared models and task-specific models. This  
finding demonstrates that the meta-knowledge graph is necessary to model and capture task-specific  
information. The superior performance can also be interpreted in the top figure. In the left, we  
show the heatmap between prototypes and meta-knowledge vertices (deeper color means higher  
similarity). We can see that sinusoids and line activate V1 and V4, which may represent curve and  
line, respectively. V1 and V4 also contribute to quadratic and quadratic surface, which also show  
the similarity between these two families of functions. V3 is activated in P0 of all functions and the  
quadratic surface and ripple further activate V1 in P0, which may show the different between 2D  
functions and 3D functions (sinusoid, line, quadratic and cubic lie in the subspace). Specifically,  
in the right figure, we illustrate the meta-knowledge graph, where we set a threshold to filter the  
link with low similarity score and show the rest. We can see that V3 is the most popular vertice and  
  
|Model|MAML Meta-SGD MT-Net MUMOMAML HSML ARML|  
|---|---|  
  
  
|10-shot|2.292 Â± 0.163 2.908 Â± 0.229 1.757 Â± 0.120 0.523 Â± 0.036 0.494 Â± 0.038 0.438 Â± 0.029|  
|---|---|  
  
  
connected with V1, V5 (represent curve) and V4 (represent line). V1 is further connected with V5,  
demonstrating the similarity of curve representation.  
  
V1  
  
V2  
  
Sinusoids Line  
  
V0 V3  
  
Quadratic Cubic  
  
V5 V4  
  
Quadratic Surface Ripple  
  
Model MAML Meta-SGD MT-Net MUMOMAML HSML ARML  
  
10-shot 2.292 0.163 2.908 0.229 1.757 0.120 0.523 0.036 0.494 0.038 \*\*0.438\*\* \*\*0.029\*\*  
  
  
Figure 2: In the top figure, we show the interpretation of meta-knowledge graph. The left heatmap  
shows the similarity between prototypes (P0, P1) and meta-knowledge vertices (V0-V5). The right  
part show the meta-knowledge graph. In the bottom table, we show the overall performance (mean  
square error with 95% confidence) of 10-shot 2D regression.  
  
  
\-----  
  
5.3 FEW-SHOT CLASSIFICATION  
  
\*\*Dataset Description and Settings\*\* In the few-shot classification problem, we first use the benchmark proposed in (Yao et al., 2019), where four fine-grained image classification datasets are included  
(i.e., CUB-200-2011 (Bird), Describable Textures Dataset (Texture), FGVC of Aircraft (Aircraft),  
and FGVCx-Fungi (Fungi)). For each few-shot classification task, it samples classes from one of four  
datasets. In this paper, we call this dataset as Plain-Multi and each fine-grained dataset as subdataset.  
  
Then, to demonstrate the effectiveness of our proposed model for handling more complex underlying  
structures, in this paper, we increase the difficulty of few-shot classification problem by introducing  
two image filters: blur filter and pencil filter. Similar as (Jerfel et al., 2019), for each image in PlainMulti, one artistic filters are applied to simulate a changing distribution of few-shot classification  
tasks. After applying the filters, the total number of subdatasets is 12 and each tasks is sampled from  
one of them. This data is named as Art-Multi. More detailed descriptions of the effect of different  
filters is discussed in Appendix C.  
  
Following the traditional meta-learning settings, all datasets are divided into meta-training, metavalidation and meta-testing classes. The traditional N-way K-shot settings are used to split training and  
test set for each task. We adopt the standard four-block convolutional layers as the base learner (Finn  
et al., 2017; Snell et al., 2017). The number of vertices of meta-knowledge graph for Plain-Multi  
and Art-Multi datasets are set as 4 and 8, respectively. Additionally, for the miniImagenet, similar  
as (Finn et al., 2018), which tasks are constructed from a single domain and do not have heterogeneity,  
we compare our proposed ARML with other baselines and present the results in Appendix D.  
  
5.3.1 PERFORMANCE VALIDATION  
  
\*\*Overall Qualitative Analyses\*\* Experimental results for Plain-Multi and Art-Multi are shown in  
Table 1 and Table 2, respectively. For each dataset, the performance accuracy with 95% confidence  
interval are reported. Note that, due to the space limitation, in Art-Multi dataset, we only show  
the average value of each filter and the full results table are shown in Table 9 of Appendix E. In  
these two tables, first, we can observe that task-specific models (MT-Net, MUMOMAML, HSML,  
TADAM) significantly outperforms globally shared models (MAML, Meta-SGD, ProtoNet) in both  
gradient-based and non-parametric meta-learning research lines. Second, compared ARML with  
other task-specific gradient-based meta-learning methods, the better performance confirms that  
ARML can model and extract task-specific information more accurately by leveraging the constructed  
meta-knowledge graph. Especially, the performance gap between the ARML and HSML verifies the  
benefits of relational structure compared with isolated clustering structure. Finally, as a gradient-based  
meta-learning algorithm, ARML can also outperform ProtoNet and TADAM, two representative  
non-parametric meta-learning algorithms.  
  
Table 1: Overall few-shot classification results (accuracy Â± 95% confidence) on Plain-Multi dataset.  
  
|Settings|Algorithms|Data: Bird Data: Texture Data: Aircraft Data: Fungi|  
|---|---|---|  
  
|MAML 53.94 Â± 1.45% 31.66 Â± 1.31% 51.37 Â± 1.38% 42.12 Â± 1.36% MetaSGD 55.58 Â± 1.43% 32.38 Â± 1.32% 52.99 Â± 1.36% 41.74 Â± 1.34% MT-Net 58.72 Â± 1.43% 32.80 Â± 1.35% 47.72 Â± 1.46% 43.11 Â± 1.42% 5-way MUMOMAML 56.82 Â± 1.49% 33.81 Â± 1.36% 53.14 Â± 1.39% 42.22 Â± 1.40% 1-shot HSML 60.98 Â± 1.50% 35.01 Â± 1.36% 57.38 Â± 1.40% 44.02 Â± 1.39% ProtoNet 54.11 Â± 1.38% 32.52 Â± 1.28% 50.63 Â± 1.35% 41.05 Â± 1.37% TADAM 56.58 Â± 1.34% 33.34 Â± 1.27% 53.24 Â± 1.33% 43.06 Â± 1.33% ARML 62.33 Â± 1.47% 35.65 Â± 1.40% 58.56 Â± 1.41% 44.82 Â± 1.38%|MAML MetaSGD MT-Net MUMOMAML HSML|53.94 Â± 1.45% 31.66 Â± 1.31% 51.37 Â± 1.38% 42.12 Â± 1.36% 55.58 Â± 1.43% 32.38 Â± 1.32% 52.99 Â± 1.36% 41.74 Â± 1.34% 58.72 Â± 1.43% 32.80 Â± 1.35% 47.72 Â± 1.46% 43.11 Â± 1.42% 56.82 Â± 1.49% 33.81 Â± 1.36% 53.14 Â± 1.39% 42.22 Â± 1.40% 60.98 Â± 1.50% 35.01 Â± 1.36% 57.38 Â± 1.40% 44.02 Â± 1.39%|  
|---|---|---|  
||ProtoNet TADAM|54.11 Â± 1.38% 32.52 Â± 1.28% 50.63 Â± 1.35% 41.05 Â± 1.37% 56.58 Â± 1.34% 33.34 Â± 1.27% 53.24 Â± 1.33% 43.06 Â± 1.33%|  
||ARML|62.33 Â± 1.47% 35.65 Â± 1.40% 58.56 Â± 1.41% 44.82 Â± 1.38%|  
  
|ARML 62.33 Â± 1.47% 35.65 Â± 1.40% 58.56 Â± 1.41% 44.82 Â± 1.38%|ARML|62.33 Â± 1.47% 35.65 Â± 1.40% 58.56 Â± 1.41% 44.82 Â± 1.38%|  
|---|---|---|  
|MAML 68.52 Â± 0.79% 44.56 Â± 0.68% 66.18 Â± 0.71% 51.85 Â± 0.85% MetaSGD 67.87 Â± 0.74% 45.49 Â± 0.68% 66.84 Â± 0.70% 52.51 Â± 0.81% MT-Net 69.22 Â± 0.75% 46.57 Â± 0.70% 63.03 Â± 0.69% 53.49 Â± 0.83% 5-way MUMOMAML 70.49 Â± 0.76% 45.89 Â± 0.69% 67.31 Â± 0.68% 53.96 Â± 0.82% 5-shot HSML 71.68 Â± 0.73% 48.08 Â± 0.69% 73.49 Â± 0.68% 56.32 Â± 0.80% ProtoNet 68.67 Â± 0.72% 45.21 Â± 0.67% 65.29 Â± 0.68% 51.27 Â± 0.81% TADAM 69.13 Â± 0.75% 45.78 Â± 0.65% 69.87 Â± 0.66% 53.15 Â± 0.82% ARML 73.34 Â± 0.70% 49.67 Â± 0.67% 74.88 Â± 0.64% 57.55 Â± 0.82%|MAML MetaSGD MT-Net MUMOMAML HSML|68.52 Â± 0.79% 44.56 Â± 0.68% 66.18 Â± 0.71% 51.85 Â± 0.85% 67.87 Â± 0.74% 45.49 Â± 0.68% 66.84 Â± 0.70% 52.51 Â± 0.81% 69.22 Â± 0.75% 46.57 Â± 0.70% 63.03 Â± 0.69% 53.49 Â± 0.83% 70.49 Â± 0.76% 45.89 Â± 0.69% 67.31 Â± 0.68% 53.96 Â± 0.82% 71.68 Â± 0.73% 48.08 Â± 0.69% 73.49 Â± 0.68% 56.32 Â± 0.80%|  
||ProtoNet TADAM|68.67 Â± 0.72% 45.21 Â± 0.67% 65.29 Â± 0.68% 51.27 Â± 0.81% 69.13 Â± 0.75% 45.78 Â± 0.65% 69.87 Â± 0.66% 53.15 Â± 0.82%|  
||ARML|73.34 Â± 0.70% 49.67 Â± 0.67% 74.88 Â± 0.64% 57.55 Â± 0.82%|  
  
  
\-----  
  
Table 2: Overall few-shot classification results (accuracy Â± 95% confidence) on Art-Multi dataset.  
  
|Settings|Algorithms|Avg. Origninal Avg. Blur Avg. Pencil|  
|---|---|---|  
  
  
|MAML 42.70 Â± 1.35% 40.53 Â± 1.38% 36.71 Â± 1.37% MetaSGD 44.21 Â± 1.38% 42.36 Â± 1.39% 37.21 Â± 1.39% MT-Net 43.94 Â± 1.40% 41.64 Â± 1.37% 37.79 Â± 1.38% 5-way, 1-shot MUMOMAML 45.63 Â± 1.39% 41.59 Â± 1.38% 39.24 Â± 1.36% HSML 45.68 Â± 1.37% 42.62 Â± 1.38% 39.78 Â± 1.36% Protonet 42.08 Â± 1.34% 40.51 Â± 1.37% 36.24 Â± 1.35% TADAM 44.73 Â± 1.33% 42.44 Â± 1.35% 39.02 Â± 1.34% ARML 47.92 Â± 1.34% 44.43 Â± 1.34% 41.44 Â± 1.34%|MAML MetaSGD MT-Net MUMOMAML HSML|42.70 Â± 1.35% 40.53 Â± 1.38% 36.71 Â± 1.37% 44.21 Â± 1.38% 42.36 Â± 1.39% 37.21 Â± 1.39% 43.94 Â± 1.40% 41.64 Â± 1.37% 37.79 Â± 1.38% 45.63 Â± 1.39% 41.59 Â± 1.38% 39.24 Â± 1.36% 45.68 Â± 1.37% 42.62 Â± 1.38% 39.78 Â± 1.36%|  
|---|---|---|  
||Protonet TADAM|42.08 Â± 1.34% 40.51 Â± 1.37% 36.24 Â± 1.35% 44.73 Â± 1.33% 42.44 Â± 1.35% 39.02 Â± 1.34%|  
||ARML|47.92 Â± 1.34% 44.43 Â± 1.34% 41.44 Â± 1.34%|  
  
  
|ARML 47.92 Â± 1.34% 44.43 Â± 1.34% 41.44 Â± 1.34%|ARML|47.92 Â± 1.34% 44.43 Â± 1.34% 41.44 Â± 1.34%|  
|---|---|---|  
|MAML 58.30 Â± 0.74% 55.71 Â± 0.74% 49.59 Â± 0.73% MetaSGD 57.82 Â± 0.72% 55.54 Â± 0.73% 50.24 Â± 0.72% MT-Net 57.95 Â± 0.74% 54.65 Â± 0.73% 49.18 Â± 0.73% 5-way, 5-shot MUMOMAML 58.60 Â± 0.75% 56.29 Â± 0.72% 51.15 Â± 0.73% HSML 60.63 Â± 0.73% 57.91 Â± 0.72% 53.93 Â± 0.72% Protonet 58.12 Â± 0.74% 55.07 Â± 0.73% 50.15 Â± 0.74% TADAM 60.35 Â± 0.72% 58.36 Â± 0.73% 53.15 Â± 0.74% ARML 61.78 Â± 0.74% 58.73 Â± 0.75% 55.27 Â± 0.73%|MAML MetaSGD MT-Net MUMOMAML HSML|58.30 Â± 0.74% 55.71 Â± 0.74% 49.59 Â± 0.73% 57.82 Â± 0.72% 55.54 Â± 0.73% 50.24 Â± 0.72% 57.95 Â± 0.74% 54.65 Â± 0.73% 49.18 Â± 0.73% 58.60 Â± 0.75% 56.29 Â± 0.72% 51.15 Â± 0.73% 60.63 Â± 0.73% 57.91 Â± 0.72% 53.93 Â± 0.72%|  
||Protonet TADAM|58.12 Â± 0.74% 55.07 Â± 0.73% 50.15 Â± 0.74% 60.35 Â± 0.72% 58.36 Â± 0.73% 53.15 Â± 0.74%|  
||ARML|61.78 Â± 0.74% 58.73 Â± 0.75% 55.27 Â± 0.73%|  
  
  
  
\*\*Model Ablation Study\*\* In this section, we perform the ablation study of the proposed ARML to  
demonstrate the effectiveness of each component. The results of ablation study on 5-way, 5-shot  
scenario for Art-Multi dataset are presented in Table 3. In Appendix F, we also show the full results  
for Art-Multi in Table 6 and the ablation study of Plain-Multi in Table 7. Specifically, to show  
the effectiveness of prototype construction, in ablation I, we use the mean pooling aggregation  
of each sample rather than the prototype-based relational graph to interact with meta-knowledge  
graph. In ablation II, we use all samples to construct the sample-level relational graph without  
using the prototype. Compared with ablation I and II, the better performance of ARML shows  
that structuring samples can (1) better handling the underlying relations (2) alleviating the effect of  
potential anomalies by structuring samples as prototypes.  
  
In ablation III, we remove the meta-knowledge graph and use the prototype-based relational graph  
structure with aggregator AG\[q\] as the task representation. The better performance of ARML demonstrates the effectiveness of meta-knowledge graph for capturing the relational structure and facilitating  
the classification performance. We further remove the reconstruction loss and show the results in  
ablation IV and the results demonstrate that the autoencoder structure can benefit the process of  
learning the representation.  
  
In ablation VI and VII, we change the modulate function to film (Perez et al., 2018) and tanh,  
respectively. We can see that ARML is not very sensitive to the modulating function, and sigmoid  
function is slightly better than other activation functions in most cases.  
  
Table 3: Results (accuracy Â± 95% confidence) of Ablation Models (5-way, 5-shot) on Art-Multi.  
  
|Ablation Models|Ave. Original Ave. Blur Ave. Pencil|  
|---|---|  
  
|I. no prototype-based graph II. no prototype|60.80 Â± 0.74% 58.36 Â± 0.73% 54.79 Â± 0.73% 61.34 Â± 0.73% 58.34 Â± 0.74% 54.81 Â± 0.73%|  
|---|---|  
  
|III. no meta-knowledge graph IV. no reconstruction loss|59.99 Â± 0.75% 57.79 Â± 0.73% 53.68 Â± 0.74% 59.07 Â± 0.73% 57.20 Â± 0.74% 52.45 Â± 0.73%|  
|---|---|  
  
|V. tanh modulation VI. film modulation|62.34 Â± 0.74% 58.58 Â± 0.75% 54.01 Â± 0.74% 60.06 Â± 0.75% 57.47 Â± 0.73% 52.06 Â± 0.74%|  
|---|---|  
  
|ARML|61.78 Â± 0.74% 58.73 Â± 0.75% 55.27 Â± 0.73%|  
|---|---|  
  
  
5.3.2 ANALYSIS OF CONSTRUCTED META-KNOWLEDGE GRAPH  
  
In this section, we conduct extensive analysis for the constructed meta-knowledge graph, which is  
regarded as the key component in ARML. Due to the space limit, we only present the results on ArtMulti datasets. For Plain-Multi, the analysis with similar observations are discussed in Appendix G.  
  
  
\-----  
  
\*\*Performance v.s. Vertice Numbers\*\* We first investigate the impact of vertice numbers in metaknowledge graph. The results are shown in Table 4. From the results, we can notice that the  
performance saturates as the number of vertices researches around 8. One potential reason is that 8  
vertices is enough to capture the potential relations. If we have a larger datasets with more complex  
relations, more vertices may be needed. In addition, if the meta-knowledge graph do not have enough  
vertices, the worse performance suggests that the graph may not be able to capture enough relations  
across tasks.  
  
Table 4: Sensitivity analysis with different # of vertices in meta-knowledge graph (5-way, 5-shot).  
  
|# of vertices|Ave. Original Ave. Blur Ave. Pencil|  
|---|---|  
  
  
|4 8 12 16 20|61.18 Â± 0.72% 58.13 Â± 0.73% 54.88 Â± 0.75% 61.78 Â± 0.74% 58.73 Â± 0.75% 55.27 Â± 0.73% 61.66 Â± 0.73% 58.61 Â± 0.72% 55.07 Â± 0.74% 61.75 Â± 0.73% 58.67 Â± 0.74% 55.26 Â± 0.73% 61.91 Â± 0.74% 58.92 Â± 0.73% 55.24 Â± 0.72%|  
|---|---|  
  
  
  
\*\*Model Interpretation Analysis of Meta-Knowledge Graph\*\* We then analyze the learned metaknowledge graph. For each subdataset, we randomly select one task as exemplary. For each task,  
in the left part of Figure 3 we show the similarity heatmap between prototypes and vertices in  
meta-knowledge graph, where deeper color means higher similarity. V0-V8 and P1-P5 denotes  
the different vertices and prototypes, respectively. The meta-knowledge graph is also illustrated  
in the right part. Similar as the graph in 2D regression, we set a threshold to filter links with low  
similarity and illustrate the rest of them. First, We can see that the V1 is mainly activated by bird  
and aircraft (including all filters), which may reflect the shape similarity between bird and aircraft.  
Second, V2, V3, V4 are firstly activated by texture and they form a loop in the meta-knowledge  
graph. Especially, V2 also benefits images with blur and pencil filters. Thus, V2 may represent the  
main texture and facilitate the training process on other subdatasets. The meta-knowledge graph also  
shows the importance of V2 since it is connected with almost all other vertices. Third, when we use  
blur filter, in most cases (bird blur, texture blur, fungi blur), V7 is activated. Thus, V7 may show the  
similarity of images with blur filter. In addition, the connection between V7 and V2 and V3 show that  
classify blur images may depend on the texture information. Fourth, V6 (activated by aircraft mostly)  
connects with V2 and V3, justifying the importance of texture information to classify the aircrafts.  
  
V1  
  
V2  
  
Bird Texture Aircraft Fungi  
  
V0 V3  
  
Bird Blur Texture Blur Aircraft Blur Fungi Blur V7  
  
V4  
  
V6  
  
V5  
  
Bird Pencil Texture Pencil Aircraft Pencil Fungi Pencil  
  
  
Figure 3: Interpretation of meta-knowledge graph on Art-Multi dataset. For each subdataset, we  
randomly select one task from them. In the left, we show the similarity heatmap between prototypes  
(P0-P5) and meta-knowledge vertices (V0-V7). In the right part, we show the meta-knowledge graph.  
  
6 CONCLUSION  
  
In this paper, to improve the effectiveness of meta-learning for handling heterogeneous task, we  
propose a new framework called ARML, which automatically extract relation across tasks and  
construct a meta-knowledge graph. When a new task comes in, it can quickly find the most relevant  
relations through the meta-knowledge graph and use this knowledge to facilitate its training process.  
The experiments demonstrate the effectiveness of our proposed algorithm.  
  
  
\-----  
  
REFERENCES  
  
Marcin Andrychowicz, Misha Denil, Sergio Gomez, Matthew W Hoffman, David Pfau, Tom Schaul,  
Brendan Shillingford, and Nando De Freitas. Learning to learn by gradient descent by gradient  
descent. In NeurIPS, pp. 3981â€“3989, 2016.  
  
Chelsea Finn and Sergey Levine. Meta-learning and universality: Deep representations and gradient  
descent can approximate any learning algorithm. In ICLR, 2018.  
  
Chelsea Finn, Pieter Abbeel, and Sergey Levine. Model-agnostic meta-learning for fast adaptation of  
deep networks. In ICML, pp. 1126â€“1135, 2017.  
  
Chelsea Finn, Kelvin Xu, and Sergey Levine. Probabilistic model-agnostic meta-learning. In NeurIPS,  
2018.  
  
Sebastian Flennerhag, Pablo G Moreno, Neil D Lawrence, and Andreas Damianou. Transferring  
knowledge across learning processes. ICLR, 2019.  
  
Justin Gilmer, Samuel S Schoenholz, Patrick F Riley, Oriol Vinyals, and George E Dahl. Neural  
message passing for quantum chemistry. In ICML, pp. 1263â€“1272. JMLR. org, 2017.  
  
Jonathan Gordon, John Bronskill, Matthias Bauer, Sebastian Nowozin, and Richard E Turner. Metalearning probabilistic inference for prediction. In ICLR, 2019.  
  
Erin Grant, Chelsea Finn, Sergey Levine, Trevor Darrell, and Thomas Griffiths. Recasting gradientbased meta-learning as hierarchical bayes. In ICLR, 2018.  
  
Jiatao Gu, Yong Wang, Yun Chen, Kyunghyun Cho, and Victor OK Li. Meta-learning for low-resource  
neural machine translation. In EMNLP, 2018.  
  
Will Hamilton, Zhitao Ying, and Jure Leskovec. Inductive representation learning on large graphs. In  
\_NeurIPS, pp. 1024â€“1034, 2017.\_  
  
Ghassen Jerfel, Erin Grant, Thomas L Griffiths, and Katherine Heller. Reconciling meta-learning and  
continual learning with online mixtures of tasks. NeurIPS, 2019.  
  
Bingyi Kang, Zhuang Liu, Xin Wang, Fisher Yu, Jiashi Feng, and Trevor Darrell. Few-shot object  
detection via feature reweighting. In ICCV, 2019.  
  
Thomas N Kipf and Max Welling. Semi-supervised classification with graph convolutional networks.  
In ICLR, 2017.  
  
Yoonho Lee and Seungjin Choi. Gradient-based meta-learning with learned layerwise metric and  
subspace. In ICML, pp. 2933â€“2942, 2018.  
  
Zhenguo Li, Fengwei Zhou, Fei Chen, and Hang Li. Meta-sgd: Learning to learn quickly for few  
shot learning. arXiv preprint arXiv:1707.09835, 2017.  
  
Zhaojiang Lin, Andrea Madotto, Chien-Sheng Wu, and Pascale Fung. Personalizing dialogue agents  
via meta-learning. 2019.  
  
Ming-Yu Liu, Xun Huang, Arun Mallya, Tero Karras, Timo Aila, Jaakko Lehtinen, and Jan Kautz.  
Few-shot unsupervised image-to-image translation. arXiv preprint arXiv:1905.01723, 2019.  
  
Nikhil Mishra, Mostafa Rohaninejad, Xi Chen, and Pieter Abbeel. A simple neural attentive metalearner. ICLR, 2018.  
  
Alex Nichol and John Schulman. Reptile: a scalable metalearning algorithm. arXiv preprint  
\_arXiv:1803.02999, 2018.\_  
  
Boris Oreshkin, Pau RodrÂ´Ä±guez Lopez, and Alexandre Lacoste. Tadam: Task dependent adaptiveÂ´  
metric for improved few-shot learning. In NeurIPS, pp. 721â€“731, 2018.  
  
Ethan Perez, Florian Strub, Harm de Vries, Vincent Dumoulin, and Aaron C. Courville. Film: Visual  
reasoning with a general conditioning layer. In AAAI, 2018.  
  
  
\-----  
  
Sachin Ravi and Hugo Larochelle. Optimization as a model for few-shot learning. ICLR, 2016.  
  
Andrei A Rusu, Dushyant Rao, Jakub Sygnowski, Oriol Vinyals, Razvan Pascanu, Simon Osindero,  
and Raia Hadsell. Meta-learning with latent embedding optimization. In ICLR, 2019.  
  
Jake Snell, Kevin Swersky, and Richard Zemel. Prototypical networks for few-shot learning. In  
\_NeurIPS, pp. 4077â€“4087, 2017.\_  
  
Petar VelickoviË‡ c, Guillem Cucurull, Arantxa Casanova, Adriana Romero, Pietro Lio, and YoshuaÂ´  
Bengio. Graph attention networks. In ICLR, 2018.  
  
Oriol Vinyals, Charles Blundell, Timothy Lillicrap, Daan Wierstra, et al. Matching networks for one  
shot learning. In NeurIPS, pp. 3630â€“3638, 2016.  
  
Risto Vuorio, Shao-Hua Sun, Hexiang Hu, and Joseph J Lim. Toward multimodal model-agnostic  
meta-learning. NeurIPS, 2019.  
  
Xin Wang, Fisher Yu, Ruth Wang, Trevor Darrell, and Joseph E Gonzalez. Tafe-net: Task-aware  
feature embeddings for low shot learning. In CVPR, pp. 1831â€“1840, 2019.  
  
Flood Sung Yongxin Yang, Li Zhang, Tao Xiang, Philip HS Torr, and Timothy M Hospedales.  
Learning to compare: Relation network for few-shot learning. In CVPR, 2018.  
  
Huaxiu Yao, Ying Wei, Junzhou Huang, and Zhenhui Li. Hierarchically structured meta-learning. In  
\_ICML, pp. 7045â€“7054, 2019.\_  
  
Jaesik Yoon, Taesup Kim, Ousmane Dia, Sungwoong Kim, Yoshua Bengio, and Sungjin Ahn.  
Bayesian model-agnostic meta-learning. In NeurIPS, pp. 7343â€“7353, 2018.  
  
Sung Whan Yoon, Jun Seo, and Jaekyun Moon. Tapnet: Neural network augmented with task-adaptive  
projection for few-shot learning. In ICML, 2019.  
  
  
\-----  
  
A ALGORITHM IN META-TESTING PROCESS  
  
\*\*Algorithm 2 Meta-Testing Process of ARML\*\*  
  
\*\*Require: Training data\*\* \_t\_ \[of a new task\]\[ T\]\[t\]  
\_D\[tr\]\_  
  
1: Construct the prototype-based relational graph Rt by computing prototype in equation 2 and  
weight in equation 4  
  
2: Compute the similarity between each prototype and meta-knowledge vertice in equation 6 and  
construct the super-graph St  
  
3: Apply GNN on super-graph St and get the updated prototype representation \*\*C\[Ë†\]\*\* \_Rt\_  
  
4: Aggregate CRt in equation 8, \*\*C\[Ë†\]\*\* \_Rt in equation 9 and get the representations qt, tt\_  
  
5: Compute the task-specific initialization Î¸0t in equation 10  
6: Update parameters Î¸t = Î¸0t âˆ’ \_Î±âˆ‡Î¸L(fÎ¸, Dt\[tr\]\[)\]\_  
  
  
B HYPERPARAMETERS SETTINGS  
  
B.1 2D REGRESSION  
  
In 2D regression problem, we set the inner-loop stepsize (i.e., Î±) and outer-loop stepsize (i.e., Î²) as  
0.001 and 0.001, respectively. The embedding function E is set as one layer with 40 neurons. The  
autoencoder aggregator is constructed by the gated recurrent structures. We set the meta-batch size as  
25 and the inner loop gradient steps as 5.  
  
B.2 FEW-SHOT IMAGE CLASSIFICATION  
  
In few-shot image classification, for both Plain-Multi and Art-Multi datasets, we set the corresponding  
inner stepsize (i.e., Î±) as 0.001 and the outer stepsize (i.e., Î²) as 0.01. For the embedding function E,  
we employ two convolutional layers with 3 Ã— 3 filters. The channel size of these two convolutional  
layers are 32. After convolutional layers, we use two fully connected layers with 384 and 64 neurons  
for each layer. Similar as the hyperparameter settings in 2D regression, the autoencoder aggregator  
is constructed by the gated recurrent structures, i.e., AG\[t\], AG\[t\]dec \[AG\]\[q\]\[,\]\[ AG\]dec\[q\] \[are all GRUs. The\]  
meta-batch size is set as 4. For the inner loop, we use 5 gradient steps.  
  
B.3 DETAILED BASELINE SETTINGS  
  
For the gradient-based baselines (i.e., MAML, MetaSGD, MT-Net, BMAML. MUMOMAML,  
HSML), we use the same inner loop stepsize and outer loop stepsize rate as our ARML. As for  
non-parametric based meta-learning algorithms, both TADAM and Prototypical network, we use the  
same meta-training and meta-testing process as gradient-based models. Additionally, TADAM uses  
the same embedding function E as ARML for fair comparison (i.e., similar expressive ability).  
  
C ADDITIONAL DISCUSSION OF DATASETS  
  
In this dataset, we use pencil and blur filers to change the task distribution. To investigate the effect  
of pencil and blur filters, we provide one example in Figure 4. We can observe that different filters  
result in different data distributions. All used filter are provided by OpenCV\[1\].  
  
D RESULTS ON MINIIMAGENET  
  
For miniimagenet, since it do not have the characteristic of task heterogeneity, we show the results in  
Table 5. In this table, we compare the MiniImagenet dataset with other gradient-based meta-learning  
models (the first four baselines are globally shared models and the next four are task-specific models).  
Similar as (Finn et al., 2018), we also apply the standard 4-block convolutional layers for each  
  
[1https://opencv.org/](1https://opencv.org/)  
  
  
\-----  
  
(a) : Plain Image (b) : with blur filter (c) : with pencil filter  
  
Figure 4: Effect of different filters.  
  
baseline. For MT-Net, we use the reported results in (Yao et al., 2019), which control the model with  
the same expressive power. The results indicate that our proposed ARML can outperform the original  
MAML and achieves comparable performance with task-specific models (e.g., MT-Net, PLATIPUS,  
HSML). Most task-specific models achieve the similar performance on the standard benchmark due  
to the homogeneity between tasks.  
  
Table 5: Performance comparison on the 5-way, 1-shot MiniImagenet dataset.  
  
|Algorithms|5-way 1-shot Accuracy|  
|---|---|  
  
|MAML (Finn et al., 2017) LLAMA (Finn & Levine, 2018) Reptile (Nichol & Schulman, 2018) MetaSGD (Li et al., 2017)|48.70 1.84% Â± 49.40 1.83% Â± 49.97 0.32% Â± 50.47 1.87% Â±|  
|---|---|  
  
|MT-Net (Lee & Choi, 2018) MUMOMAML (Vuorio et al., 2019) HSML (Yao et al., 2019) PLATIPUS (Finn et al., 2018)|49.75 1.83% Â± 49.86 1.85% Â± 50.38 1.85% Â± 50.13 1.86% Â±|  
|---|---|  
  
|ARML|50.42 1.73% Â±|  
|---|---|  
  
  
E ADDITIONAL RESULTS OF FEW-SHOT IMAGE CLASSIFICATION  
  
E.1 FULL OVERALL RESULTS TABLE OF ART-MULTI DATASET  
  
We provide the full results table of Art-Multi Dataset in Table 9. In this table, we can see our proposed  
ARML outperforms almost all baselines in every sub-datasets.  
  
F FURTHER INVESTIGATION OF ABLATION STUDY  
  
In this section, we first show the full evaluation results of model ablation study on Art-Multi dataset  
in 6. Note that, for the tanh activation (ablation model V), the performance is similar as applying  
the sigmoid activation. On some subdatasets, the results are even better. We choose the sigmoid  
activation for ARML because it achieves overall better performance than the tanh activation on more  
subdatasets. Then, for Plain-Multi dataset, we show the results in 7. The conclusion of ablation study  
in Plain-Multi dataset is similar as the conclusion drawn from the results on Art-Multi dataset. The  
improvement on these two datasets verifies the necessity of the joint framework in ARML.  
  
G ADDITIONAL ANALYSIS OF META-KNOWLEDGE GRAPH  
  
In this section, we add more interpretation analysis of meta-knowledge graph. First, we show the full  
evaluation results of sensitivity analysis on Art-Multi dataset in Table 8.  
  
  
\-----  
  
Table 6: Full evaluation results of model ablation study on Art-Multi dataset. B, T, A, F represent  
bird, texture, aircraft, fungi, respectively. Plain means original image.  
  
|Model|B Plain B Blur B Pencil T Plain T Blur T Pencil|  
|---|---|  
  
  
|I. no prototype-based graph II. no prototype|72.08% 71.06% 66.83% 45.23% 39.97% 41.67% 72.99% 70.92% 67.19% 45.17% 40.05% 41.04%|  
|---|---|  
  
  
|III. no meta-knowledge graph IV. no reconstruction loss|70.79% 69.53% 64.87% 43.37% 39.86% 41.23% 70.82% 69.87% 65.32% 44.02% 40.18% 40.52%|  
|---|---|  
  
  
|V. tanh VI. film|72.70% 69.53% 66.85% 45.81% 40.79% 38.64% 71.52% 68.70% 64.23% 43.83% 40.52% 39.49%|  
|---|---|  
  
  
|Model|A Plain A Blur A Pencil F Plain F Blur F Pencil|  
|---|---|  
  
  
|I. no prototype-based graph II. no prototype|70.06% 68.02% 60.66% 55.81% 54.39% 50.01% 71.10% 67.59% 61.07% 56.11% 54.82% 49.95%|  
|---|---|  
  
  
|III. no meta-knowledge graph IV. no reconstruction loss|69.97% 68.03% 59.72% 55.84% 53.72% 48.91% 66.83% 65.73% 55.98% 54.62% 53.02% 48.01%|  
|---|---|  
  
  
|V. tanh VI. film|73.96% 69.70% 60.75% 56.87% 54.30% 49.82% 69.13% 66.93% 55.59% 55.77% 53.72% 48.92%|  
|---|---|  
  
  
|ARML|71.89% 68.59% 61.41% 56.83% 54.87% 50.53%|  
|---|---|  
  
  
ARML \*\*73.05%\*\* \*\*71.31%\*\* \*\*67.14%\*\* 45.32% 40.15% \*\*41.98%\*\*  
  
  
Table 7: Results of Model Ablation (5-way, 5-shot results) on Plain-Multi dataset.  
  
|Ablation Models|Bird|Texture|Aircraft|Fungi|  
|---|---|---|---|---|  
  
|I. no sample-level graph II. no prototype|71.96 Â± 0.72% 72.86 Â± 0.74%|48.79 Â± 0.67% 49.03 Â± 0.69%|74.02 Â± 0.65% 74.36 Â± 0.65%|56.83 Â± 0.80% 57.02 Â± 0.81%|  
|---|---|---|---|---|  
  
|III. no meta-knowledge graph IV. no reconstruction loss|71.23 Â± 0.75% 70.99 Â± 0.74%|47.96 Â± 0.68% 48.03 Â± 0.69%|73.71 Â± 0.69% 69.86 Â± 0.66%|55.97 Â± 0.82% 55.78 Â± 0.83%|  
|---|---|---|---|---|  
  
|V. tanh VI. film|73.45 Â± 0.71% 72.95 Â± 0.73%|49.23 Â± 0.66% 49.18 Â± 0.69%|74.39 Â± 0.65% 73.82 Â± 0.68%|57.38 Â± 0.80% 56.89 Â± 0.80%|  
|---|---|---|---|---|  
  
|ARML|73.34 Â± 0.70%|49.67 Â± 0.67%|74.88 Â± 0.64%|57.55 Â± 0.82%|  
|---|---|---|---|---|  
  
  
Then, we analyze the meta-knowledge graph on Plain-Multi dataset by visualizing the learned metaknowledge graph on Plain-Multi dataset (as shown in Figure 5). In this figure, we can see that  
different subdatasets activate different vertices. Specifically, V2, which is mainly activated by texture,  
plays a significantly important role in aircraft and fungi. Thus, V2 connects with V3 and V1 in the  
meta-knowledge graph, which are mainly activated by fungi and aircraft, respectively. In addition,  
V0 is also activated by aircraft because of the similar contour between aircraft and bird. Furthermore,  
in meta-knowledge graph, V0 connects with V3, which shows the similarity of environment between  
bird images and fungi images.  
  
  
\-----  
  
Bird  
  
  
Texture  
  
  
V1  
  
V2  
  
V0  
  
V3  
  
  
Aircraft Fungi  
  
Figure 5: Interpretation of meta-knowledge graph on Plain-Multi dataset. For each subdataset, one  
task is randomly selected from them. In the left figure, we show the similarity heatmap between  
prototypes (P1-P5) and meta-knowledge vertices (denoted as E1-E4), where deeper color means  
higher similarity. In the right part, we show the meta-knowledge graph, where a threshold is also set  
to filter low similarity links.  
  
Table 8: Full evaluation results of performance v.s. # vertices of meta-knowledge graph on Art-Multi.  
B, T, A, F represent bird, texture, aircraft, fungi, respectively. Plain means original image.  
  
|# of Vertices|B Plain B Blur B Pencil T Plain T Blur T Pencil|  
|---|---|  
  
|# of Vertices|A Plain A Blur A Pencil F Plain F Blur F Pencil|  
|---|---|  
  
|4 8 12 16 20|70.98% 67.36% 60.46% 56.07% 53.77% 50.08% 71.89% 68.59% 61.41% 56.83% 54.87% 50.53% 71.78% 67.26% 60.97% 56.87% 55.14% 50.86% 71.96% 68.55% 61.14% 56.76% 54.54% 49.41% 72.02% 68.29% 60.59% 55.95% 54.53% 50.13%|  
|---|---|  
  
  
4 72.29% 70.36% 67.88% 45.37% 41.05% 41.43%  
8 73.05% 71.31% 67.14% 45.32% 40.15% 41.98%  
12 73.45% 70.64% 67.41% 44.53% 41.41% 41.05%  
16 72.68% 70.18% 68.34% 45.63% 41.43% 42.18%  
20 73.41% 71.07% 68.64% 46.26% 41.80% 41.61%  
  
  
\-----  
  
|55.27% 52.62% 48.58% 30.57% 28.65% 28.39% 45.59% 42.24% 34.52% 39.37% 38.58% 35.38% 55.23% 53.08% 48.18% 29.28% 28.70% 28.38% 51.24% 47.29% 35.98% 41.08% 40.38% 36.30% 56.99% 54.21% 50.25% 32.13% 29.63% 29.23% 43.64% 40.08% 33.73% 43.02% 42.64% 37.96% 57.73% 53.18% 50.96% 31.88% 29.72% 29.90% 49.95% 43.36% 39.61% 42.97% 40.08% 36.52% 58.15% 53.20% 51.09% 32.01% 30.21% 30.17% 49.98% 45.79% 40.87% 42.58% 41.29% 37.01%|53.67% 50.98% 46.66% 31.37% 29.08% 28.48% 45.54% 43.94% 35.49% 37.71% 38.00% 34.36% 54.76% 52.18% 48.85% 32.03% 29.90% 30.82% 50.42% 47.59% 40.17% 41.73% 40.09% 36.27%|59.67% 54.89% 52.97% 32.31% 30.77% 31.51% 51.99% 47.92% 41.93% 44.69% 42.13% 38.36%|  
|---|---|---|  
|MAML MetaSGD MT-Net MUMOMAML HSML|ProtoNet TADAM|ARML|  
  
|71.51% 68.65% 63.93% 42.96% 39.59% 38.87% 64.68% 62.54% 49.20% 54.08% 52.02% 46.39% 71.31% 68.73% 64.33% 41.89% 37.79% 37.91% 64.88% 63.36% 52.31% 53.18% 52.26% 46.43% 71.18% 69.29% 68.28% 43.23% 39.42% 39.20% 63.39% 58.29% 46.12% 54.01% 51.70% 47.02% 71.57% 70.50% 64.57% 44.57% 40.31% 40.07% 63.36% 61.55% 52.17% 54.89% 52.82% 47.79% 71.75% 69.31% 65.62% 44.68% 40.13% 41.33% 70.12% 67.63% 59.40% 55.97% 54.60% 49.40%|70.42% 67.90% 61.82% 44.78% 38.43% 38.40% 65.84% 63.41% 54.08% 51.45% 50.56% 46.33% 70.08% 69.05% 65.45% 44.93% 41.80% 40.18% 70.35% 68.56% 59.09% 56.04% 54.04% 47.85%|73.05% 71.31% 67.14% 45.32% 40.15% 41.98% 71.89% 68.59% 61.41% 56.83% 54.87% 50.53%|  
|---|---|---|  
|MAML MetaSGD MT-Net MUMOMAML HSML|ProtoNet TADAM|ARML|  
  
  
F Pencil  
  
F Blur  
  
F Plain  
A Pencil  
  
A Blur  
  
A Plain  
T Pencil  
  
T Blur  
  
T Plain  
B Pencil  
  
B Blur  
  
B Plain  
  
Algorithms  
Settings  
  
  
%  
\*\*36.38\*\*  
  
%  
\*\*13.42\*\*  
  
%  
\*\*69.44\*\*  
  
%  
\*\*93.41\*\*  
  
%  
\*\*92.47\*\*  
  
%  
\*\*99.51\*\*  
  
%  
\*\*51.31\*\*  
  
%  
\*\*77.30\*\*  
  
%  
\*\*31.32\*\*  
  
%  
\*\*97.52\*\*  
  
%  
\*\*89.54\*\*  
  
%  
\*\*67.59\*\*  
  
ARML  
  
  
%  
\*\*53.50\*\*  
  
%  
\*\*87.54\*\*  
  
%  
\*\*83.56\*\*  
  
%  
\*\*41.61\*\*  
  
%  
\*\*59.68\*\*  
  
%  
\*\*89.71\*\*  
  
%  
\*\*98.41\*\*  
15%.40  
  
%  
\*\*32.45\*\*  
  
%  
\*\*14.67\*\*  
  
%  
\*\*31.71\*\*  
  
%  
\*\*05.73\*\*  
  
ARML  
  
  
\-----  
  
  

#   

# 2\. Four Most Vital Parts to the AI Scientist Structure According to CoPilot:

Sure, I can help with that! Here are the most vital folders and files in the AI Scientist structure based on the provided code:

- **`experiment.py`**: This file contains the core code for running experiments. It includes functions for generating ideas, checking novelty, and interacting with the LLM.
- **`prompt.json`**: This file holds the prompts and system messages used to guide the LLM in generating and refining ideas.
- **`ideas.json`**: This file stores the generated ideas in JSON format, including their ratings and novelty status.
- **`seed_ideas.json`**: This file contains initial seed ideas that are used to kickstart the idea generation process.

You can focus on these files and adapt their content to fit the context of philosophy for your AI Philosopher project. If you need further assistance with specific sections or modifications, feel free to ask!

* * *

  

# Generate Ideas and Seed\_Ideas

```
i
import json
import os
import os.path as osp
import time
from typing import List, Dict, Union
from ai_scientist.llm import get_response_from_llm, extract_json_between_markers

import requests
import backoff

S2_API_KEY = os.getenv("S2_API_KEY")

idea_first_prompt = """{task_description}
<experiment.py>
{code}
</experiment.py>

Here are the ideas that you have already generated:

'''
{prev_ideas_string}
'''

Come up with the next impactful and creative idea for research experiments and directions you can feasibly investigate with the code provided.
Note that you will not have access to any additional resources or datasets.
Make sure any idea is not overfit the specific training dataset or model, and has wider significance.

Respond in the following format:

THOUGHT:
<THOUGHT>

NEW IDEA JSON:
```json
<JSON>
```

In <THOUGHT>, first briefly discuss your intuitions and motivations for the idea. Detail your high-level plan, necessary design choices and ideal outcomes of the experiments. Justify how the idea is different from the existing ones.

In <JSON>, provide the new idea in JSON format with the following fields:
- "Name": A shortened descriptor of the idea. Lowercase, no spaces, underscores allowed.
- "Title": A title for the idea, will be used for the report writing.
- "Experiment": An outline of the implementation. E.g. which functions need to be added or modified, how results will be obtained, ...
- "Interestingness": A rating from 1 to 10 (lowest to highest).
- "Feasibility": A rating from 1 to 10 (lowest to highest).
- "Novelty": A rating from 1 to 10 (lowest to highest).

Be cautious and realistic on your ratings.
This JSON will be automatically parsed, so ensure the format is precise.
You will have {num_reflections} rounds to iterate on the idea, but do not need to use them all.
"""

idea_reflection_prompt = """Round {current_round}/{num_reflections}.
In your thoughts, first carefully consider the quality, novelty, and feasibility of the idea you just created.
Include any other factors that you think are important in evaluating the idea.
Ensure the idea is clear and concise, and the JSON is the correct format.
Do not make things overly complicated.
In the next attempt, try and refine and improve your idea.
Stick to the spirit of the original idea unless there are glaring issues.

Respond in the same format as before:
THOUGHT:
<THOUGHT>

NEW IDEA JSON:
```json
<JSON>
```

If there is nothing to improve, simply repeat the previous JSON EXACTLY after the thought and include "I am done" at the end of the thoughts but before the JSON.
ONLY INCLUDE "I am done" IF YOU ARE MAKING NO MORE CHANGES."""


# GENERATE IDEAS
def generate_ideas(
    base_dir,
    client,
    model,
    skip_generation=False,
    max_num_generations=20,
    num_reflections=5,
):
    if skip_generation:
        # Load existing ideas from file
        try:
            with open(osp.join(base_dir, "ideas.json"), "r") as f:
                ideas = json.load(f)
            print("Loaded existing ideas:")
            for idea in ideas:
                print(idea)
            return ideas
        except FileNotFoundError:
            print("No existing ideas found. Generating new ideas.")
        except json.JSONDecodeError:
            print("Error decoding existing ideas. Generating new ideas.")

    idea_str_archive = []
    with open(osp.join(base_dir, "seed_ideas.json"), "r") as f:
        seed_ideas = json.load(f)
    for seed_idea in seed_ideas:
        idea_str_archive.append(json.dumps(seed_idea))

    with open(osp.join(base_dir, "experiment.py"), "r") as f:
        code = f.read()

    with open(osp.join(base_dir, "prompt.json"), "r") as f:
        prompt = json.load(f)

    idea_system_prompt = prompt["system"]

    for _ in range(max_num_generations):
        print()
        print(f"Generating idea {_ + 1}/{max_num_generations}")
        try:
            prev_ideas_string = "\n\n".join(idea_str_archive)

            msg_history = []
            print(f"Iteration 1/{num_reflections}")
            text, msg_history = get_response_from_llm(
                idea_first_prompt.format(
                    task_description=prompt["task_description"],
                    code=code,
                    prev_ideas_string=prev_ideas_string,
                    num_reflections=num_reflections,
                ),
                client=client,
                model=model,
                system_message=idea_system_prompt,
                msg_history=msg_history,
            )
            ## PARSE OUTPUT
            json_output = extract_json_between_markers(text)
            assert json_output is not None, "Failed to extract JSON from LLM output"
            print(json_output)

            # Iteratively improve task.
            if num_reflections > 1:
                for j in range(num_reflections - 1):
                    print(f"Iteration {j + 2}/{num_reflections}")
                    text, msg_history = get_response_from_llm(
                        idea_reflection_prompt.format(
                            current_round=j + 2, num_reflections=num_reflections
                        ),
                        client=client,
                        model=model,
                        system_message=idea_system_prompt,
                        msg_history=msg_history,
                    )
                    ## PARSE OUTPUT
                    json_output = extract_json_between_markers(text)
                    assert (
                        json_output is not None
                    ), "Failed to extract JSON from LLM output"
                    print(json_output)

                    if "I am done" in text:
                        print(f"Idea generation converged after {j + 2} iterations.")
                        break

            idea_str_archive.append(json.dumps(json_output))
        except Exception as e:
            print(f"Failed to generate idea: {e}")
            continue

    ## SAVE IDEAS
    ideas = []
    for idea_str in idea_str_archive:
        ideas.append(json.loads(idea_str))

    with open(osp.join(base_dir, "ideas.json"), "w") as f:
        json.dump(ideas, f, indent=4)

    return ideas


# GENERATE IDEAS OPEN-ENDED
def generate_next_idea(
    base_dir,
    client,
    model,
    prev_idea_archive=[],
    num_reflections=5,
    max_attempts=10,
):
    idea_archive = prev_idea_archive
    original_archive_size = len(idea_archive)

    print(f"Generating idea {original_archive_size + 1}")

    if len(prev_idea_archive) == 0:
        print(f"First iteration, taking seed ideas")
        # seed the archive on the first run with pre-existing ideas
        with open(osp.join(base_dir, "seed_ideas.json"), "r") as f:
            seed_ideas = json.load(f)
        for seed_idea in seed_ideas[:1]:
            idea_archive.append(seed_idea)
    else:
        with open(osp.join(base_dir, "experiment.py"), "r") as f:
            code = f.read()
        with open(osp.join(base_dir, "prompt.json"), "r") as f:
            prompt = json.load(f)
        idea_system_prompt = prompt["system"]

        for _ in range(max_attempts):
            try:
                idea_strings = []
                for idea in idea_archive:
                    idea_strings.append(json.dumps(idea))
                prev_ideas_string = "\n\n".join(idea_strings)

                msg_history = []
                print(f"Iteration 1/{num_reflections}")
                text, msg_history = get_response_from_llm(
                    idea_first_prompt.format(
                        task_description=prompt["task_description"],
                        code=code,
                        prev_ideas_string=prev_ideas_string,
                        num_reflections=num_reflections,
                    )
                    + """
Completed ideas have an additional "Score" field which indicates the assessment by an expert ML reviewer.
This is on a standard 1-10 ML conference scale.
Scores of 0 indicate the idea failed either during experimentation, writeup or reviewing.
""",
                    client=client,
                    model=model,
                    system_message=idea_system_prompt,
                    msg_history=msg_history,
                )
                ## PARSE OUTPUT
                json_output = extract_json_between_markers(text)
                assert json_output is not None, "Failed to extract JSON from LLM output"
                print(json_output)

                # Iteratively improve task.
                if num_reflections > 1:
                    for j in range(num_reflections - 1):
                        print(f"Iteration {j + 2}/{num_reflections}")
                        text, msg_history = get_response_from_llm(
                            idea_reflection_prompt.format(
                                current_round=j + 2, num_reflections=num_reflections
                            ),
                            client=client,
                            model=model,
                            system_message=idea_system_prompt,
                            msg_history=msg_history,
                        )
                        ## PARSE OUTPUT
                        json_output = extract_json_between_markers(text)
                        assert (
                            json_output is not None
                        ), "Failed to extract JSON from LLM output"
                        print(json_output)

                        if "I am done" in text:
                            print(
                                f"Idea generation converged after {j + 2} iterations."
                            )
                            break

                idea_archive.append(json_output)
                break
            except Exception as e:
                print(f"Failed to generate idea: {e}")
                continue

    ## SAVE IDEAS
    with open(osp.join(base_dir, "ideas.json"), "w") as f:
        json.dump(idea_archive, f, indent=4)

    return idea_archive


def on_backoff(details):
    print(
        f"Backing off {details['wait']:0.1f} seconds after {details['tries']} tries "
        f"calling function {details['target'].__name__} at {time.strftime('%X')}"
    )


@backoff.on_exception(
    backoff.expo, requests.exceptions.HTTPError, on_backoff=on_backoff
)
def search_for_papers(query, result_limit=10) -> Union[None, List[Dict]]:
    if not query:
        return None
    rsp = requests.get(
        "https://api.semanticscholar.org/graph/v1/paper/search",
        headers={"X-API-KEY": S2_API_KEY},
        params={
            "query": query,
            "limit": result_limit,
            "fields": "title,authors,venue,year,abstract,citationStyles,citationCount",
        },
    )
    print(f"Response Status Code: {rsp.status_code}")
    print(
        f"Response Content: {rsp.text[:500]}"
    )  # Print the first 500 characters of the response content
    rsp.raise_for_status()
    results = rsp.json()
    total = results["total"]
    time.sleep(1.0)
    if not total:
        return None

    papers = results["data"]
    return papers


novelty_system_msg = """You are an ambitious AI PhD student who is looking to publish a paper that will contribute significantly to the field.
You have an idea and you want to check if it is novel or not. I.e., not overlapping significantly with existing literature or already well explored.
Be a harsh critic for novelty, ensure there is a sufficient contribution in the idea for a new conference or workshop paper.
You will be given access to the Semantic Scholar API, which you may use to survey the literature and find relevant papers to help you make your decision.
The top 10 results for any search query will be presented to you with the abstracts.

You will be given {num_rounds} to decide on the paper, but you do not need to use them all.
At any round, you may exit early and decide on the novelty of the idea.
Decide a paper idea is novel if after sufficient searching, you have not found a paper that significantly overlaps with your idea.
Decide a paper idea is not novel, if you have found a paper that significantly overlaps with your idea.

{task_description}
<experiment.py>
{code}
</experiment.py>
"""

novelty_prompt = '''Round {current_round}/{num_rounds}.
You have this idea:

"""
{idea}
"""

The results of the last query are (empty on first round):
"""
{last_query_results}
"""

Respond in the following format:

THOUGHT:
<THOUGHT>

RESPONSE:
```json
<JSON>
```

In <THOUGHT>, first briefly reason over the idea and identify any query that could help you make your decision.
If you have made your decision, add "Decision made: novel." or "Decision made: not novel." to your thoughts.

In <JSON>, respond in JSON format with ONLY the following field:
- "Query": An optional search query to search the literature (e.g. attention is all you need). You must make a query if you have not decided this round.

A query will work best if you are able to recall the exact name of the paper you are looking for, or the authors.
This JSON will be automatically parsed, so ensure the format is precise.'''


def check_idea_novelty(
    ideas,
    base_dir,
    client,
    model,
    max_num_iterations=10,
):
    with open(osp.join(base_dir, "experiment.py"), "r") as f:
        code = f.read()
    with open(osp.join(base_dir, "prompt.json"), "r") as f:
        prompt = json.load(f)
        task_description = prompt["task_description"]

    for idx, idea in enumerate(ideas):
        if "novel" in idea:
            print(f"Skipping idea {idx}, already checked.")
            continue

        print(f"\nChecking novelty of idea {idx}: {idea['Name']}")

        novel = False
        msg_history = []
        papers_str = ""

        for j in range(max_num_iterations):
            try:
                text, msg_history = get_response_from_llm(
                    novelty_prompt.format(
                        current_round=j + 1,
                        num_rounds=max_num_iterations,
                        idea=idea,
                        last_query_results=papers_str,
                    ),
                    client=client,
                    model=model,
                    system_message=novelty_system_msg.format(
                        num_rounds=max_num_iterations,
                        task_description=task_description,
                        code=code,
                    ),
                    msg_history=msg_history,
                )
                if "decision made: novel" in text.lower():
                    print("Decision made: novel after round", j)
                    novel = True
                    break
                if "decision made: not novel" in text.lower():
                    print("Decision made: not novel after round", j)
                    break

                ## PARSE OUTPUT
                json_output = extract_json_between_markers(text)
                assert json_output is not None, "Failed to extract JSON from LLM output"

                ## SEARCH FOR PAPERS
                query = json_output["Query"]
                papers = search_for_papers(query, result_limit=10)
                if papers is None:
                    papers_str = "No papers found."

                paper_strings = []
                for i, paper in enumerate(papers):
                    paper_strings.append(
                        """{i}: {title}. {authors}. {venue}, {year}.\nNumber of citations: {cites}\nAbstract: {abstract}""".format(
                            i=i,
                            title=paper["title"],
                            authors=paper["authors"],
                            venue=paper["venue"],
                            year=paper["year"],
                            cites=paper["citationCount"],
                            abstract=paper["abstract"],
                        )
                    )
                papers_str = "\n\n".join(paper_strings)

            except Exception as e:
                print(f"Error: {e}")
                continue

        idea["novel"] = novel

    # Save results to JSON file
    results_file = osp.join(base_dir, "ideas.json")
    with open(results_file, "w") as f:
        json.dump(ideas, f, indent=4)

    return ideas


if __name__ == "__main__":
    MAX_NUM_GENERATIONS = 32
    NUM_REFLECTIONS = 5
    import argparse

    parser = argparse.ArgumentParser(description="Generate AI scientist ideas")
    # add type of experiment (nanoGPT, Boston, etc.)
    parser.add_argument(
        "--experiment",
        type=str,
        default="nanoGPT",
        help="Experiment to run AI Scientist on.",
    )
    parser.add_argument(
        "--model",
        type=str,
        default="gpt-4o-2024-05-13",
        choices=[
            "claude-3-5-sonnet-20240620",
            "gpt-4o-2024-05-13",
            "deepseek-coder-v2-0724",
            "llama3.1-405b",
        ],
        help="Model to use for AI Scientist.",
    )
    parser.add_argument(
        "--skip-idea-generation",
        action="store_true",
        help="Skip idea generation and use existing ideas.",
    )
    parser.add_argument(
        "--check-novelty",
        action="store_true",
        help="Check novelty of ideas.",
    )
    args = parser.parse_args()

    # Create client
    if args.model == "claude-3-5-sonnet-20240620":
        import anthropic

        print(f"Using Anthropic API with model {args.model}.")
        client_model = "claude-3-5-sonnet-20240620"
        client = anthropic.Anthropic()
    elif args.model.startswith("bedrock") and "claude" in args.model:
        import anthropic

        # Expects: bedrock/<MODEL_ID>
        client_model = args.model.split("/")[-1]

        print(f"Using Amazon Bedrock with model {client_model}.")
        client = anthropic.AnthropicBedrock()
    elif args.model.startswith("vertex_ai") and "claude" in args.model:
        import anthropic

        # Expects: vertex_ai/<MODEL_ID>
        client_model = args.model.split("/")[-1]

        print(f"Using Vertex AI with model {client_model}.")
        client = anthropic.AnthropicVertex()
    elif args.model == "gpt-4o-2024-05-13":
        import openai

        print(f"Using OpenAI API with model {args.model}.")
        client_model = "gpt-4o-2024-05-13"
        client = openai.OpenAI()
    elif args.model == "deepseek-coder-v2-0724":
        import openai

        print(f"Using OpenAI API with {args.model}.")
        client_model = "deepseek-coder-v2-0724"
        client = openai.OpenAI(
            api_key=os.environ["DEEPSEEK_API_KEY"], base_url="https://api.deepseek.com"
        )
    elif args.model == "llama3.1-405b":
        import openai

        print(f"Using OpenAI API with {args.model}.")
        client_model = "meta-llama/llama-3.1-405b-instruct"
        client = openai.OpenAI(
            api_key=os.environ["OPENROUTER_API_KEY"],
            base_url="https://openrouter.ai/api/v1",
        )
    else:
        raise ValueError(f"Model {args.model} not supported.")

    base_dir = osp.join("templates", args.experiment)
    results_dir = osp.join("results", args.experiment)
    ideas = generate_ideas(
        base_dir,
        client=client,
        model=client_model,
        skip_generation=args.skip_idea_generation,
        max_num_generations=MAX_NUM_GENERATIONS,
        num_reflections=NUM_REFLECTIONS,
    )
    if args.check_novelty:
        ideas = check_idea_novelty(
            ideas,
            base_dir=base_dir,
            client=client,
            model=client_model,
        )
```

  

  

* * *

  

```
Searching your page for information

Sent by Copilot:
The prompt.json file is being read from the base_dir directory. Specifically, the code snippet:

Python

with open(osp.join(base_dir, "prompt.json"), "r") as f:
    prompt = json.load(f)
AI-generated code. Review and use carefully. More info on FAQ.
This line of code constructs the path to the prompt.json file by joining the base_dir directory with the filename "prompt.json", and then opens and reads the file. If you need to locate or modify this file, you should look in the directory specified by base_dir.

Reference: github.com
```

  

* * *

  

# Experiment Prompt

```
import shutil
import os.path as osp
import subprocess
from subprocess import TimeoutExpired
import sys
import json

MAX_ITERS = 4
MAX_RUNS = 5
MAX_STDERR_OUTPUT = 1500

coder_prompt = """Your goal is to implement the following idea: {title}.
The proposed experiment is as follows: {idea}.
You are given a total of up to {max_runs} runs to complete the necessary experiments. You do not need to use all {max_runs}.

First, plan the list of experiments you would like to run. For example, if you are sweeping over a specific hyperparameter, plan each value you would like to test for each run.

Note that we already provide the vanilla baseline results, so you do not need to re-run it.

For reference, the baseline results are as follows:

{baseline_results}

After you complete each change, we will run the command `python experiment.py --out_dir=run_i' where i is the run number and evaluate the results.
YOUR PROPOSED CHANGE MUST USE THIS COMMAND FORMAT, DO NOT ADD ADDITIONAL COMMAND LINE ARGS.
You can then implement the next thing on your list."""


# RUN EXPERIMENT
def run_experiment(folder_name, run_num, timeout=7200):
    cwd = osp.abspath(folder_name)
    # COPY CODE SO WE CAN SEE IT.
    shutil.copy(
        osp.join(folder_name, "experiment.py"),
        osp.join(folder_name, f"run_{run_num}.py"),
    )

    # LAUNCH COMMAND
    command = [
        "python",
        "experiment.py",
        f"--out_dir=run_{run_num}",
    ]
    try:
        result = subprocess.run(
            command, cwd=cwd, stderr=subprocess.PIPE, text=True, timeout=timeout
        )

        if result.stderr:
            print(result.stderr, file=sys.stderr)

        if result.returncode != 0:
            print(f"Run {run_num} failed with return code {result.returncode}")
            if osp.exists(osp.join(cwd, f"run_{run_num}")):
                shutil.rmtree(osp.join(cwd, f"run_{run_num}"))
            print(f"Run failed with the following error {result.stderr}")
            stderr_output = result.stderr
            if len(stderr_output) > MAX_STDERR_OUTPUT:
                stderr_output = "..." + stderr_output[-MAX_STDERR_OUTPUT:]
            next_prompt = f"Run failed with the following error {stderr_output}"
        else:
            with open(osp.join(cwd, f"run_{run_num}", "final_info.json"), "r") as f:
                results = json.load(f)
            results = {k: v["means"] for k, v in results.items()}

            next_prompt = f"""Run {run_num} completed. Here are the results:
{results}

Decide if you need to re-plan your experiments given the result (you often will not need to).

Someone else will be using `notes.txt` to perform a writeup on this in the future.
Please include *all* relevant information for the writeup on Run {run_num}, including an experiment description and the run number. Be as verbose as necessary.

Then, implement the next thing on your list.
We will then run the command `python experiment.py --out_dir=run_{run_num + 1}'.
YOUR PROPOSED CHANGE MUST USE THIS COMMAND FORMAT, DO NOT ADD ADDITIONAL COMMAND LINE ARGS.
If you are finished with experiments, respond with 'ALL_COMPLETED'."""
        return result.returncode, next_prompt
    except TimeoutExpired:
        print(f"Run {run_num} timed out after {timeout} seconds")
        if osp.exists(osp.join(cwd, f"run_{run_num}")):
            shutil.rmtree(osp.join(cwd, f"run_{run_num}"))
        next_prompt = f"Run timed out after {timeout} seconds"
        return 1, next_prompt


# RUN PLOTTING
def run_plotting(folder_name, timeout=600):
    cwd = osp.abspath(folder_name)
    # LAUNCH COMMAND
    command = [
        "python",
        "plot.py",
    ]
    try:
        result = subprocess.run(
            command, cwd=cwd, stderr=subprocess.PIPE, text=True, timeout=timeout
        )

        if result.stderr:
            print(result.stderr, file=sys.stderr)

        if result.returncode != 0:
            print(f"Plotting failed with return code {result.returncode}")
            next_prompt = f"Plotting failed with the following error {result.stderr}"
        else:
            next_prompt = ""
        return result.returncode, next_prompt
    except TimeoutExpired:
        print(f"Plotting timed out after {timeout} seconds")
        next_prompt = f"Plotting timed out after {timeout} seconds"
        return 1, next_prompt


# PERFORM EXPERIMENTS
def perform_experiments(idea, folder_name, coder, baseline_results) -> bool:
    ## RUN EXPERIMENT
    current_iter = 0
    run = 1
    next_prompt = coder_prompt.format(
        title=idea["Title"],
        idea=idea["Experiment"],
        max_runs=MAX_RUNS,
        baseline_results=baseline_results,
    )
    while run < MAX_RUNS + 1:
        if current_iter >= MAX_ITERS:
            print("Max iterations reached")
            break
        coder_out = coder.run(next_prompt)
        print(coder_out)
        if "ALL_COMPLETED" in coder_out:
            break
        return_code, next_prompt = run_experiment(folder_name, run)
        if return_code == 0:
            run += 1
            current_iter = 0
        current_iter += 1
    if current_iter >= MAX_ITERS:
        print("Not all experiments completed.")
        return False

    current_iter = 0
    next_prompt = """
Great job! Please modify `plot.py` to generate the most relevant plots for the final writeup. 

In particular, be sure to fill in the "labels" dictionary with the correct names for each run that you want to plot.

Only the runs in the `labels` dictionary will be plotted, so make sure to include all relevant runs.

We will be running the command `python plot.py` to generate the plots.
"""
    while True:
        coder_out = coder.run(next_prompt)
        return_code, next_prompt = run_plotting(folder_name)
        current_iter += 1
        if return_code == 0 or current_iter >= MAX_ITERS:
            break
    next_prompt = """
Please modify `notes.txt` with a description of what each plot shows along with the filename of the figure. Please do so in-depth.

Somebody else will be using `notes.txt` to write a report on this in the future.
"""
    coder.run(next_prompt)

    return True
```

  

* * *

# 2\. [llm.py](https://llm.py "https://llm.py") (name of file within AI Scientist Folder

[https://github.com/SakanaAI/AI-Scientist/blob/9d1304c0bc58d3c730a1f52c4fd22f21b98b9dce/ai\_scientist/llm.py](https://github.com/SakanaAI/AI-Scientist/blob/9d1304c0bc58d3c730a1f52c4fd22f21b98b9dce/ai_scientist/llm.py)  

```
import backoff
import openai
import json


# Get N responses from a single message, used for ensembling.
@backoff.on_exception(backoff.expo, (openai.RateLimitError, openai.APITimeoutError))
def get_batch_responses_from_llm(
    msg,
    client,
    model,
    system_message,
    print_debug=False,
    msg_history=None,
    temperature=0.75,
    n_responses=1,
):
    if msg_history is None:
        msg_history = []

    if model in [
        "gpt-4o-2024-05-13",
        "gpt-4o-mini-2024-07-18",
        "gpt-4o-2024-08-06",
    ]:
        new_msg_history = msg_history + [{"role": "user", "content": msg}]
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_message},
                *new_msg_history,
            ],
            temperature=temperature,
            max_tokens=3000,
            n=n_responses,
            stop=None,
            seed=0,
        )
        content = [r.message.content for r in response.choices]
        new_msg_history = [
            new_msg_history + [{"role": "assistant", "content": c}] for c in content
        ]
    elif model == "deepseek-coder-v2-0724":
        new_msg_history = msg_history + [{"role": "user", "content": msg}]
        response = client.chat.completions.create(
            model="deepseek-coder",
            messages=[
                {"role": "system", "content": system_message},
                *new_msg_history,
            ],
            temperature=temperature,
            max_tokens=3000,
            n=n_responses,
            stop=None,
        )
        content = [r.message.content for r in response.choices]
        new_msg_history = [
            new_msg_history + [{"role": "assistant", "content": c}] for c in content
        ]
    elif model == "llama-3-1-405b-instruct":
        new_msg_history = msg_history + [{"role": "user", "content": msg}]
        response = client.chat.completions.create(
            model="meta-llama/llama-3.1-405b-instruct",
            messages=[
                {"role": "system", "content": system_message},
                *new_msg_history,
            ],
            temperature=temperature,
            max_tokens=3000,
            n=n_responses,
            stop=None,
        )
        content = [r.message.content for r in response.choices]
        new_msg_history = [
            new_msg_history + [{"role": "assistant", "content": c}] for c in content
        # Just print the first one.
        print()
        print("*" * 20 + " LLM START " + "*" * 20)
        for j, msg in enumerate(new_msg_history[0]):
            print(f'{j}, {msg["role"]}: {msg["content"]}')
        print(content)
        print("*" * 21 + " LLM END " + "*" * 21)
        print()

    return content, new_msg_history


@backoff.on_exception(backoff.expo, (openai.RateLimitError, openai.APITimeoutError))
def get_response_from_llm(
    msg,
    client,
    model,
    system_message,
    print_debug=False,
    msg_history=None,
    temperature=0.75,
):
    if msg_history is None:
        msg_history = []

    if "claude" in model:
        new_msg_history = msg_history + [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": msg,
                    }
                ],
            }
        ]
        response = client.messages.create(
            model=model,
            max_tokens=3000,
            temperature=temperature,
            system=system_message,
            messages=new_msg_history,
        )
        content = response.content[0].text
        new_msg_history = new_msg_history + [
            {
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": content,
                    }
                ],
            }
        ]
    elif model in [
        "gpt-4o-2024-05-13",
        "gpt-4o-mini-2024-07-18",
        "gpt-4o-2024-08-06",
    ]:
        new_msg_history = msg_history + [{"role": "user", "content": msg}]
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_message},
                *new_msg_history,
            ],
            temperature=temperature,
            max_tokens=3000,
            n=1,
            stop=None,
            seed=0,
        )
        content = response.choices[0].message.content
        new_msg_history = new_msg_history + [{"role": "assistant", "content": content}]
    elif model == "deepseek-coder-v2-0724":
        new_msg_history = msg_history + [{"role": "user", "content": msg}]
        response = client.chat.completions.create(
            model="deepseek-coder",
            messages=[
                {"role": "system", "content": system_message},
                *new_msg_history,
            ],
            temperature=temperature,
            max_tokens=3000,
            n=1,
            stop=None,
        )
        content = response.choices[0].message.content
        new_msg_history = new_msg_history + [{"role": "assistant", "content": content}]
    elif model in ["meta-llama/llama-3.1-405b-instruct", "llama-3-1-405b-instruct"]:
        new_msg_history = msg_history + [{"role": "user", "content": msg}]
        response = client.chat.completions.create(
            model="meta-llama/llama-3.1-405b-instruct",
            messages=[
                {"role": "system", "content": system_message},
                *new_msg_history,
            ],
            temperature=temperature,
            max_tokens=3000,
            n=1,
            stop=None,
        )
        content = response.choices[0].message.content
        new_msg_history = new_msg_history + [{"role": "assistant", "content": content}]
    else:
        raise ValueError(f"Model {model} not supported.")

    if print_debug:
        print()
        print("*" * 20 + " LLM START " + "*" * 20)
        for j, msg in enumerate(new_msg_history):
            print(f'{j}, {msg["role"]}: {msg["content"]}')
        print(content)
        print("*" * 21 + " LLM END " + "*" * 21)
        print()

    return content, new_msg_history


def extract_json_between_markers(llm_output):
    json_start_marker = "```json"
    json_end_marker = "```"

    # Find the start and end indices of the JSON string
    start_index = llm_output.find(json_start_marker)
    if start_index != -1:
        start_index += len(json_start_marker)  # Move past the marker
        end_index = llm_output.find(json_end_marker, start_index)
    else:
        return None  # JSON markers not found

    if end_index == -1:
        return None  # End marker not found

    # Extract the JSON string
    json_string = llm_output[start_index:end_index].strip()
    try:
        parsed_json = json.loads(json_string)
        return parsed_json
    except json.JSONDecodeError:
        return None  # Invalid JSON format
```