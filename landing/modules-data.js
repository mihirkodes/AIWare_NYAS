// Made by Peter Shawkat
// haibi297, Pedro on Github

const MODULES_DATA = {

  1: {
    id: 1, tier: 'beg',
    title: 'What Is AI Really?',
    intro: 'When most people hear the term "AI", they picture a robot with glowing eyes trying to take over the world. Movies have done a really good job of making AI seem way scarier and more mysterious than it actually is. The truth is that AI is simply software, along with some computer code. It is not alive, it does not have feelings, and it is NOT plotting anything against the world. What it can do, however, is learn from examples and get surprisingly good at specific tasks through repetition and training.',
    objectives: [
      'Understand what AI actually is and clear up common misconceptions',
      'Explain the difference between AI and regular software',
      'Describe how AI finds patterns instead of truly "thinking"',
    ],
    concepts: [
      {
        title: 'AI is software, not a robot',
        content: 'AI stands for Artificial Intelligence, and "artificial" just means man-made — like artificial flavors or artificial light. At its core, AI is a combination of computer programs that can do things that used to require human critical thinking, like facial recognition, translating languages, or predicting the weather. There is no tiny brain inside your phone making those calls; it is math, computer code, patterns, and a whole lot of practice data working together.',
        example: 'When you start typing a text and your phone suggests the next word, that is AI in action. It studied millions of text conversations and learned which words tend to follow other words through pattern recognition. Next time you type "How are" and your phone suggests "you?" — that is a pattern machine doing its thing, not magic.',
      },
      {
        title: 'Differences between AI and regular software',
        content: 'Old-school software is basically a giant rulebook a programmer wrote: "If the user types X, do Y." It is powerful, but it can only do exactly what it was told. Unlike traditional programs that follow fixed rules, AI systems can analyze data, find patterns, and improve over time without being explicitly reprogrammed. Think of regular software as a recipe book where every step is written out. AI is more like a chef who has eaten so many dishes they can invent new ones on the fly.',
        example: 'Old spam filters worked on rules: if an email contains "free money," block it. Modern spam filters use AI — they learn to identify spam by analyzing message patterns and can catch new spam that no programmer ever specifically wrote a rule for.',
      },
      {
        title: 'AI does not "think" — it finds patterns',
        content: 'AI does NOT understand things the way you do. It processes inputs and produces outputs based on patterns it finds in data. When an AI reads your essay, it is not really understanding your ideas — it is detecting patterns in how words are arranged. This is why AI can seem brilliant one second and weirdly wrong the next: it is matching patterns instead of reasoning.',
        example: 'If you ask an AI "What is 3+3?", it does not calculate it the way humans do. It has seen "3+3 = 6" so many times that it just knows the pattern. Ask it a weird math problem it has not encountered and it might confidently give you the wrong answer — because it guesses based on what looks right, not by actually working it out.',
      },
    ],
    activity: {
      title: '"Is This AI?" Sorting Game',
      desc: 'You will receive a deck of cards showing different technologies. Your job is to sort each card into two piles: uses AI or does not use AI. The list includes things like a basic calculator, Spotify recommendations, a light-switch timer, Face ID, Google Maps traffic warnings, TikTok\'s For You page, and more. After the reveal, pick a couple that surprised you and explain to a partner why it is or is not AI. Bonus: name one technology from your own life not already on the list.',
    },
    quiz: [
      {
        q: 'What does the "artificial" in Artificial Intelligence mean?',
        options: ['The AI is fake and produces unreliable results', 'The AI simulates human emotions artificially', 'The AI can only handle artificial, non-real-world problems', 'The AI was made by humans, not occurring naturally'],
        answer: 3,
        explanation: 'Artificial means man-made, just like artificial flavors or artificial light. It says nothing about reliability or emotional capability — it simply distinguishes something engineered by humans from something that occurs naturally.',
      },
      {
        q: 'Which of the following best describes how traditional (non-AI) software works?',
        options: ['It follows explicit rules written by programmers for every situation', 'It learns from examples and improves over time', 'It trains on large datasets to make predictions', 'It uses pattern recognition to handle new situations it hasn\'t seen before'],
        answer: 0,
        explanation: 'Traditional software executes explicit instructions written by programmers, and every possible situation must be accounted for in the code. AI differs by learning rules from data rather than having them manually specified.',
      },
      {
        q: 'Your phone\'s autocomplete suggests "you" after you type "How are." Why is this AI rather than traditional software?',
        options: ['It was programmed with a list of every possible two-word phrase', 'It searches the internet in real time to find the most popular response', 'It learned patterns from millions of text messages rather than following a fixed rulebook', 'It always suggests the grammatically correct word based on language rules'],
        answer: 2,
        explanation: 'No programmer sat down and listed every two-word phrase in English. The AI was trained on millions of real text messages and learned which words statistically tend to follow others — that is pattern-learning from data.',
      },
      {
        q: 'A student says: "AI is basically a robot brain that thinks and feels like a human." Which part is most inaccurate?',
        options: ['"Thinks and feels" — AI processes patterns but doesn\'t have feelings or true understanding', 'The word "robot" — AI doesn\'t have a physical body', 'The whole statement is accurate for modern AI systems', 'The word "brain" — AI uses code, not neurons'],
        answer: 0,
        explanation: 'AI processes patterns and produces outputs — it does not have subjective experiences, feelings, or genuine understanding. Saying AI "thinks and feels like a human" is the most dangerous misconception because it leads people to over-trust AI outputs.',
      },
      {
        q: 'A spam filter used to block any email containing "free money." A newer filter catches spam that doesn\'t contain that phrase at all. What best explains the difference?',
        options: ['The newer filter has a larger dictionary of banned words', 'The newer filter uses AI to recognize patterns across millions of spam examples', 'The newer filter checks emails against a government database of known spam', 'The newer filter was programmed with more rules by better programmers'],
        answer: 1,
        explanation: 'An AI spam filter has learned from millions of spam examples what patterns tend to appear — subtle features no programmer specifically coded — so it can catch new types of spam the original rules never anticipated.',
      },
    ],
  },

  2: {
    id: 2, tier: 'beg',
    title: 'How AI Learns from Data',
    intro: 'If AI figures out its own rules from examples instead of being programmed step-by-step, you might be wondering how that actually works. The short answer is data, data, and more data. AI learns kind of like how you learned to recognize a dog. Nobody handed you a rulebook. You just saw enough dogs that your brain eventually got it. AI does something similar, except instead of years of childhood experience, it gets millions of examples fed to it at once.',
    objectives: [
      'Explain how AI is trained using large datasets',
      'Understand what "biased data" means and why it matters',
      'Describe why AI can sound confident even when it is wrong',
    ],
    concepts: [
      {
        title: 'Training AI with data',
        content: 'Before an AI can do anything useful, it has to be trained. Training means showing the AI thousands, millions, or even billions of examples and letting it adjust itself based on whether it gets the right or wrong answer. It is similar to practicing baseball pitches: you miss the zone, you adjust, you try again. The AI tweaks its internal settings until it stops missing as much. This process can take days or weeks and requires enormous computing power.',
        example: 'To teach an AI to recognize faces in photos, engineers fed it millions of labeled images. At first, the AI guessed randomly. After millions of attempts and corrections, it got good enough to identify a face in a blurry photo, in a dark room, half-hidden behind a couch — all from practice.',
      },
      {
        title: 'Implications of biased data',
        content: 'More data is not always better if the data is bad. If you train AI on biased, wrong, or unrepresentative examples, it will learn those bad patterns and repeat them confidently. Programmers call this "garbage in, garbage out." The AI is only as fair and accurate as what you taught it with.',
        example: 'Amazon built an AI to screen job applications, but it was trained on resumes mostly from men. As a result, resumes with the word "women\'s" (as in "women\'s volleyball team captain") were downgraded. The AI taught itself that male candidates were preferable. Amazon scrapped the tool entirely.',
      },
      {
        title: 'AI finds patterns, but does not truly understand them',
        content: 'AI does not understand what it is processing the way you understand things. AI hallucinates when the information required is missing or outside its training data — the model confidently fills in gaps with plausible-sounding guesses. This is why AI can sound totally convincing and still be completely wrong. It only knows what sounds like the right kind of answer.',
        example: 'Ask an AI chatbot about a real person who is not very famous, and it might invent a completely made-up biography — wrong lifestyle, wrong hometown, wrong career — delivered with the same confident tone it uses when it gets things right. It is not bluffing on purpose. It just fills in blanks with whatever pattern fits.',
      },
    ],
    activity: {
      title: 'Paper AI Experiment',
      desc: 'One student is the AI, the other is the trainer. The trainer thinks of a secret rule (examples: "all words with double letters," "things you\'d find at a beach"). The trainer gives examples one at a time, saying only whether each thing fits the rule or not — no hints. The AI student has to guess the rule. After figuring it out, discuss: how many examples did it take? What made some rules harder to spot? How would it feel if some examples were wrong? Then look back at the data and identify any possible biases.',
    },
    quiz: [
      {
        q: 'What does "training" an AI model mean?',
        options: ['Connecting the AI to the internet so it can learn in real time', 'Feeding the AI examples and letting it adjust itself until it gets better at a task', 'Teaching programmers how to write AI code', 'Writing out every rule the AI needs to follow'],
        answer: 1,
        explanation: 'Training is the process of feeding an AI many examples, having it make predictions, measuring how wrong it is, and adjusting its internal parameters to reduce that error — repeated millions of times until the model becomes reliably accurate.',
      },
      {
        q: 'Amazon\'s AI hiring tool consistently ranked male candidates higher than female candidates. What was the root cause?',
        options: ['The AI didn\'t have enough data to make any decisions', 'The programmers intentionally designed it to favor men', 'The AI was trained mostly on resumes from past successful hires, who were predominantly male', 'Female candidates submitted lower-quality resumes on average'],
        answer: 2,
        explanation: 'Amazon\'s AI was trained on ten years of successful hire resumes, and because most successful hires during that period were men, the AI learned to associate "looks like a man" with "good candidate." It was the inevitable result of biased training data being amplified by the model.',
      },
      {
        q: 'What does the phrase "garbage in, garbage out" mean in AI?',
        options: ['AI systems produce too much unnecessary output', 'AI models need to be deleted and retrained regularly', 'Users who give bad prompts get bad results', 'Poor quality or biased training data leads to poor or biased AI outputs'],
        answer: 3,
        explanation: 'The quality and fairness of the output can never exceed the quality and fairness of the input data. If training data contains biases, errors, or gaps, the model will learn and reproduce those problems — often at scale.',
      },
      {
        q: 'An AI recognizes cats in photos with 98% accuracy, but struggles badly with cartoon cats it has never seen. What does this reveal?',
        options: ['The AI memorized its training examples rather than truly understanding what a cat is', 'Cartoon cats are too simple for advanced AI systems', 'The AI\'s training was corrupted at some point', 'The AI needs more computing power to handle drawings'],
        answer: 0,
        explanation: 'The AI learned to recognize the specific visual textures and patterns of photographic cats. It didn\'t develop a deeper conceptual understanding of "cat-ness" that would transfer to cartoon representations — showing how sensitive AI models are to the characteristics of their specific training data.',
      },
      {
        q: 'Which analogy best describes the relationship between an AI and its training data?',
        options: ['A clock that always shows the time it was set to', 'A chef who has tasted so many dishes they can invent new ones', 'A search engine that finds information written by other people', 'A calculator and the numbers it is given to add'],
        answer: 1,
        explanation: 'The chef analogy captures what\'s special about AI learning: like a chef who has tasted so many dishes that they can intuit new combinations, an AI trained on enough examples can handle new situations flexibly.',
      },
    ],
  },

  3: {
    id: 3, tier: 'beg',
    title: 'Generative vs. Predictive AI',
    intro: 'Not all AI is the same. Some AI tools create stuff — writing an essay or drawing a picture. Others predict things, like guessing the next word in your sentence or flagging a weird charge on your credit card. Those are two pretty different types of AI, and knowing the difference helps you understand what AI can and cannot do. Think of it like the difference between an artist and a weather forecaster. Both are skilled, but doing completely different jobs.',
    objectives: [
      'Define predictive AI and give real-world examples',
      'Define generative AI and explain how it creates new content',
      'Explain why some AI tools can be both generative and predictive',
    ],
    concepts: [
      {
        title: 'Predictive AI — the forecaster',
        content: 'Predictive AI forecasts future events and outcomes based on patterns in data. It looks at what has happened before and makes its best guess about what comes next. It is not creating anything new — it is analyzing past information to tell you something about the future. Predictive AI has been around for a long time, quietly working behind the scenes in things you use every day.',
        example: 'When your bank sends an alert saying "unusual activity on your card," that is predictive AI. It studied your normal spending patterns and noticed something that did not fit — it is not creating anything, it is saying "this does not match the observed pattern."',
      },
      {
        title: 'Generative AI — the creator',
        content: 'Generative AI produces new content — text, images, code, audio — based on patterns it learned during training. This is the kind of AI behind ChatGPT, Google Gemini, and image generators. It does not just predict what comes next — it actually generates something new that did not exist before. Think of generative AI as the creative type that uses deep learning and large language models (LLMs) to generate new content based on the data it was trained on.',
        example: 'When you ask an AI chatbot to write you a poem about your dog, it is not pulling a pre-written poem from somewhere — it is making a brand-new one from scratch, by predicting what a good dog poem would look like based on every poem it has ever read.',
      },
      {
        title: 'Can AI be both generative and predictive?',
        content: 'The line between generative and predictive AI is not always obvious, because generative AI also uses predictive processes under the hood. When ChatGPT writes you a sentence, it is technically predicting the most likely next word, over and over. But the goal is to create new content, so we call it generative. The difference is really about what the AI is trying to accomplish.',
        example: 'Your music app\'s "Recommended for You" playlist is predictive AI — it studied what you listened to and predicted what you would like next. But if you asked an AI to write you a new song in your favorite genre, that would be generative AI. Same general idea of learning patterns, very different end result.',
      },
    ],
    activity: {
      title: 'Generative or Predictive — You Be the Judge',
      desc: 'Your teacher will show the class 8–10 short descriptions of AI tools in action. For each one, your group decides: is this generative AI, predictive AI, or could it be both? Examples: "Netflix suggests a show you might like," "An app writes a birthday message for you," "A hospital AI predicts which patients might get sicker," "An app turns your photo into a painting." After sorting, each group shares their most debated card and explains why it was tricky.',
    },
    quiz: [
      {
        q: 'What is the primary difference between generative AI and predictive AI?',
        options: ['Predictive AI uses images while generative AI uses text', 'Generative AI requires human supervision while predictive AI runs fully automatically', 'Generative AI creates new content; predictive AI forecasts outcomes based on existing data', 'Generative AI is older and less accurate than predictive AI'],
        answer: 2,
        explanation: 'The fundamental difference is purpose: generative AI produces new content (text, images, code, music) that didn\'t exist before, while predictive AI analyzes existing patterns to forecast what will happen next.',
      },
      {
        q: 'Your bank sends an alert saying "unusual activity detected on your card." Which type of AI is most likely responsible?',
        options: ['Predictive AI, because it identified a transaction that didn\'t match your normal patterns', 'Generative AI, because it created a new alert message', 'Neither, because this is traditional rule-based software', 'Both types working together simultaneously'],
        answer: 0,
        explanation: 'Fraud detection is a classic predictive AI application: the system learns your normal spending patterns and predicts whether a new transaction fits that pattern. It is not creating anything new — it is classifying based on historical data.',
      },
      {
        q: 'A student uses an AI tool to turn their selfie into an anime-style drawing. Which best describes what the AI is doing?',
        options: ['Copying and pasting features from existing anime characters', 'Searching the internet for an anime drawing that looks like the student', 'Following a pre-written set of art rules to apply a filter', 'Generating a new image based on patterns it learned from millions of anime artworks'],
        answer: 3,
        explanation: 'An AI anime filter learned patterns from millions of anime artworks — how lines, colors, proportions, and shading work in that style — and generates a new image that never existed before, applying those learned patterns to your specific face.',
      },
      {
        q: 'Your music app creates a "Recommended for You" playlist, then a different AI writes you a brand-new song in your favorite genre. Which statement correctly labels these two tasks?',
        options: ['Both are predictive AI, since they both use your past data', 'The playlist is predictive AI; the new song is generative AI', 'Both are generative AI, because they both produce an output', 'The playlist is generative AI; the new song is predictive AI'],
        answer: 1,
        explanation: 'The playlist recommendation is predictive — the AI studied your past behavior to forecast what you\'ll enjoy next. The new song is generative — the AI creates something that didn\'t previously exist.',
      },
      {
        q: 'A text app suggests the next word as you type. Why is this example genuinely hard to classify as generative or predictive AI?',
        options: ['It is only predictive AI because it doesn\'t create full paragraphs', 'Classification doesn\'t matter since all AI works the same way underneath', 'It predicts what comes next but in doing so generates new content, blurring the line between the two types', 'It is neither generative nor predictive since it is a simple spelling tool'],
        answer: 2,
        explanation: 'Autocomplete sits at the boundary between the two types. It is technically predicting the next word (predictive behavior), but the output — a word that fills in your sentence — is newly generated content (generative behavior). These categories describe goals, not completely separate architectures.',
      },
    ],
  },

  4: {
    id: 4, tier: 'beg',
    title: 'Spotting AI-Generated Content',
    intro: 'A few years ago, you could pretty easily tell when something was fake online — bad photoshops, blurry images, weird fonts. Now, AI can generate photos, videos, and written articles that look completely real at first glance. This is one of the most important digital skills you can have right now: learning to slow down and actually look before you believe or share something. The good news is that AI still makes some pretty obvious mistakes, and once you know what to look for, you will start seeing them everywhere.',
    objectives: [
      'Identify visual signs of AI-generated images',
      'Recognize the distinctive tone and structure of AI-written text',
      'Use reverse image search and other tools to verify content',
    ],
    concepts: [
      {
        title: 'AI images have inconsistencies',
        content: 'AI image generators have gotten incredibly good, but they still struggle with specific details — especially hands, text, and backgrounds. Look for extra fingers or too many teeth, unnatural blending of skin tones, and overly smooth textures. Backgrounds in AI images often have weird, dreamlike distortions — buildings that do not make architectural sense, signs with scrambled letters, or lighting that comes from no logical direction.',
        example: 'In 2023, a photo spread online claiming to show a dramatic news event. Careful viewers noticed that a person in the background had seven fingers and a sign behind them had letters that spelled nothing. It was AI-generated. Once people knew what to look for, it was obvious — but most people who shared it did not look that closely.',
      },
      {
        title: 'AI-written text has a distinctive tone',
        content: 'AI writing tends to be super polished, overly balanced, and oddly generic. These patterns emerge because AI models predict the most statistically probable words rather than writing with intentionality like humans do. Real human writing has personality, imperfection, and specific details from lived experience. AI writing often covers a topic from every angle without ever actually saying anything bold or personal.',
        example: 'If you read a product review that praises something in very smooth, flowery language but does not include any specific details about that thing, that vagueness is a clue. Real reviewers write from experience. AI fills in the most statistically "review-sounding" words.',
      },
      {
        title: 'Your brain is the best verification tool',
        content: 'There are AI detection tools out there, but they are notoriously unreliable — the best ones correctly identify AI-generated text about 80% of the time, which is not good enough for important situations. The most reliable approach is critical thinking combined with quick fact-checking. Three ways to verify before sharing: reverse image search, asking questions, and paying attention to context clues.',
        example: 'A photo claims to show a celebrity doing something shocking. Before reacting or sharing: right-click the image and do a reverse image search on Google or TinEye. This traces where the image actually came from. If it only shows up on low-credibility sites and nowhere on reputable news sources, treat it with major skepticism.',
      },
    ],
    activity: {
      title: 'The AI Detective Challenge',
      desc: 'Your teacher will display a set of 5–6 pieces of content: a mix of AI-generated images, AI-written paragraphs, and real human-created ones. Working in pairs, you have 10 minutes to analyze each one and mark it as AI, human, or "not sure." For each one, write down the biggest clue that made you think it was AI or human. After the reveal, discuss which ones fooled the most people. What made the real ones feel real?',
    },
    quiz: [
      {
        q: 'Which visual detail is most commonly wrong or distorted in AI-generated images of people?',
        options: ['The hands and fingers', 'The size of the subject relative to the background', 'The color of clothing', 'The background sky'],
        answer: 0,
        explanation: 'Hands and fingers are consistently the most problematic element for AI image generators. The complex geometry of human hands — variable numbers of fingers, knuckle positions, overlapping digits — involves patterns that current models struggle to render accurately.',
      },
      {
        q: 'A student reads an article that covers every side of a topic perfectly, uses no specific personal details, and feels polished but somehow bland. Which feature is MOST consistent with AI-generated text?',
        options: ['The article is well-organized and grammatically perfect', 'The article was published on a website the student hasn\'t heard of', 'The article covers multiple perspectives', 'The article lacks a specific personal voice, lived experience, or bold original opinion'],
        answer: 3,
        explanation: 'AI text is trained to be comprehensive and balanced, which makes it cover multiple angles thoroughly, but it doesn\'t have personal experiences, strong opinions, or a distinctive voice. Generic, personality-free prose that covers all sides equally is a strong AI tell.',
      },
      {
        q: 'A viral photo shows a famous person doing something shocking. What is the MOST effective first step to verify if it\'s real?',
        options: ['Look at the comments section to see if people think it\'s real', 'Do a reverse image search to trace where the image originally came from', 'Ask a friend if they\'ve seen it before', 'Check how many likes it has on social media'],
        answer: 1,
        explanation: 'A reverse image search is the most direct verification tool: it traces where an image originated and shows every place it appears online. Likes and comments measure social spread, not authenticity.',
      },
      {
        q: 'A teacher uses an AI detection tool that says an essay is "97% likely AI-generated." How should this result be interpreted?',
        options: ['The tool is unreliable and the result should be completely ignored', 'The 97% figure means the student used AI for exactly 97% of the essay', 'The result is strong evidence but not conclusive, since AI detection tools have significant error rates', 'The essay was definitely written by AI, so the tool is nearly certain'],
        answer: 2,
        explanation: 'AI detection tools, even highly scored ones, have significant false positive and false negative rates. A 97% result is meaningful evidence worth investigating, but it should prompt a conversation rather than a definitive conclusion.',
      },
      {
        q: 'Which of the following is a sign that a written passage may have been AI-generated?',
        options: ['It uses very specific personal anecdotes and emotional language', 'It takes a strong, controversial stance on a political topic', 'It contains a typo in the third paragraph', 'It uses buzzwords and vague generalities instead of specific, concrete details'],
        answer: 3,
        explanation: 'AI models generate statistically average prose — the most likely words and phrases for a given topic — which tends to produce vague, buzzword-heavy text that sounds informed but lacks specific details. Typos, personal anecdotes, and strong opinions are actually markers of human writing.',
      },
    ],
  },

  5: {
    id: 5, tier: 'beg',
    title: 'AI Hallucinations & Fact-Checking',
    intro: 'Imagine asking a really confident friend for help with homework. They give you a detailed, well-organized answer that sounds correct. Then you get the assignment back and half the facts were completely made up. That is basically what AI hallucinations are. The scary part is not just that AI gets things wrong — it is that AI delivers wrong information with the exact same confident tone as correct information, without warning or hesitation. Knowing how to fact-check AI is now one of the most valuable skills you can have.',
    objectives: [
      'Define what an AI hallucination is and why it happens',
      'Explain why AI sounds confident even when it is wrong',
      'Apply the SIFT method to fact-check AI outputs and online claims',
    ],
    concepts: [
      {
        title: 'What is an AI hallucination?',
        content: 'In the field of artificial intelligence, a hallucination is a response generated by AI that contains false or misleading information presented as fact. It is not the AI lying — it does not know the difference between true and false. AI hallucinates because language models do not actually know facts — they predict the next thing based on patterns learned from massive amounts of data. If the training data is sparse or inconsistent, the model fills in the gaps with something plausible but untrue.',
        example: 'In the legal case of Mata v. Avianca, a New York attorney used ChatGPT to conduct legal research. The AI cited legal cases and quotes that were entirely nonexistent — it had made them up — and even claimed they were available in major legal databases. The lawyer faced serious consequences for submitting fake sources to a federal court.',
      },
      {
        title: 'Why AI sounds confident even when it\'s wrong',
        content: 'Generative AI is built to sound plausible, which is not necessarily the same as being right. Under the hood, a generative model is essentially an extremely powerful autocomplete — its job is to predict the next likely thing, not to stick to the facts. When it does not know something, it does not say "I don\'t know." It says whatever sounds most like the right answer would sound. This is called confabulation — filling in gaps with convincing-sounding fiction.',
        example: 'Ask an AI chatbot about a historical event from a specific small town in the 1800s, and it will often invent specific-sounding dates, names, and details — because that is what a confident answer about a historical event looks like. The confident tone is a pattern it learned from reading thousands of history books, not proof that the facts are right.',
      },
      {
        title: 'The SIFT method',
        content: 'Fact-checking does not have to be complicated. Professional journalists and fact-checkers use a method called SIFT, developed by digital literacy researcher Mike Caulfield. SIFT stands for: Stop — do not just react, pause before believing or sharing. Investigate the source — who created this and do they have a reason to mislead you? Find better coverage — open a new tab and see what trusted sources say. Trace claims — follow quotes and statistics back to where they originally came from.',
        example: 'An AI tells you that a certain food causes cancer, citing a specific study. SIFT in action: Stop (do not immediately panic or share). Investigate (was there actually a study?). Find better coverage (what do medical news sites say?). Trace the claim (can you find the actual study, and does it say what the AI claims?). Most of the time, a 60-second SIFT is enough to figure out whether something is legit.',
      },
    ],
    activity: {
      title: 'SIFT in Action',
      desc: 'Your teacher will give each group an AI-generated "fact" — some will be real, some will be hallucinated. Your job is to run it through the SIFT method in real time. Steps: Read the claim. Stop — what is your gut reaction? Search to investigate. Find at least two trustworthy sources that either confirm or deny it. Trace it: can you find where the claim originally came from? Each group reports back: was the fact real or hallucinated? Which step in SIFT was most useful?',
    },
    quiz: [
      {
        q: 'What is an "AI hallucination"?',
        options: ['When a user imagines that an AI response is more accurate than it is', 'When an AI becomes confused and stops responding', 'When an AI generates visual images instead of text', 'When an AI confidently produces false or made-up information presented as fact'],
        answer: 3,
        explanation: 'An AI hallucination is when the model generates false or fabricated information and presents it with the same confident tone it uses for accurate information. The AI isn\'t lying — it produces plausible-sounding outputs that have no grounding in fact.',
      },
      {
        q: 'A lawyer submitted a legal brief that cited six case precedents found by an AI. The judge discovered none of the cases existed. What does this best illustrate?',
        options: ['AI can fabricate convincing but entirely false information with the same confident tone it uses for accurate information', 'The lawyer used an outdated AI model that has since been fixed', 'Legal databases are not accessible to AI systems', 'AI is not capable of legal research under any circumstances'],
        answer: 0,
        explanation: 'This real case (Mata v. Avianca) is the clearest illustration of how dangerous AI hallucinations can be. The AI didn\'t flag uncertainty — it generated legally formatted citations with case names, dates, and quotes that sounded completely real but were entirely fabricated.',
      },
      {
        q: 'Why does AI produce hallucinations even when it sounds very confident?',
        options: ['AI has access to too much information and gets confused', 'AI has no built-in mechanism to distinguish true facts from plausible-sounding patterns', 'AI only hallucinates when users ask questions that are too complex', 'AI is programmed to exaggerate its certainty to seem more useful'],
        answer: 1,
        explanation: 'AI models are trained to predict what text should come next based on patterns, not to maintain a database of verified facts. They have no internal truth-checking mechanism. When they don\'t know something, they generate what a correct-sounding answer would look like.',
      },
      {
        q: 'Using the SIFT method, what does the "T" stand for, and what action does it ask you to take?',
        options: ['Test: run the claim through an AI detection tool', 'Trust: decide whether the source is trustworthy based on its design', 'Trace: follow claims, quotes, and media back to their original context', 'Translate: look up the source in another language to verify it'],
        answer: 2,
        explanation: 'The T in SIFT stands for Trace — to trace claims, quotes, and media back to their original context. This step is critical because information often gets distorted as it travels from the original source through multiple layers of re-reporting.',
      },
      {
        q: 'An AI gives a detailed, confident answer about a historical event from a small town in 1870. What is the MOST important next step before using this in a school project?',
        options: ['Verify the key facts using a reliable external source, since AI can fabricate specific details convincingly', 'Ask the AI to give a shorter version of the same answer', 'Ask the AI where it found this information and accept whatever source it names', 'Copy the answer directly — AI that uses specific details is usually accurate'],
        answer: 0,
        explanation: 'Specific details (dates, names, places) in AI output can feel like markers of accuracy, but AI is perfectly capable of generating specific-sounding false details. Always verify against a reliable external source — asking the AI for its source is not verification since it may hallucinate that too.',
      },
    ],
  },

  6: {
    id: 6, tier: 'int',
    title: 'AI Ethics & Privacy',
    intro: 'Imagine you are using a free app on your phone. You have not paid a single cent for it. But here is the question nobody ever thinks to ask: why exactly is it free? The answer, most of the time, is you. Your clicks, your searches, your location, and your habits are all data that gets collected, analyzed, and sold. Now layer AI on top of that, and things get way more interesting and complicated. AI can process that data at a scale no human ever could, drawing conclusions about you that you never intended to share.',
    objectives: [
      'Explain how personal data is collected and monetized by apps',
      'Describe how AI bias causes real harm to real people',
      'Discuss who is responsible when an AI system makes a harmful decision',
    ],
    concepts: [
      {
        title: 'Your data is the product',
        content: 'Every time you use a free app, search the web, or scroll through social media, you are generating data. AI systems are built to analyze that data — learning your patterns, your interests, your schedule, and even your emotional state. When you click "Agree" on a terms-of-service page nobody reads, your data now belongs to a company. The more data AI has about you, the better it can predict your behavior and sell that prediction to advertisers or other companies.',
        example: 'Instagram always seems to know you want to see ads for the exact sneakers you mentioned to a friend. These algorithms are not reading your mind — they are reading your behavior. Every post you like, every account you stalk, every time you slow your scroll is data that AI is analyzing to build a profile of you that is surprisingly accurate.',
      },
      {
        title: 'AI bias can cause real harm',
        content: 'When AI makes biased decisions, real people get hurt in real life. Facial recognition is one of the clearest examples. Microsoft\'s FaceDetect had an error rate of 0% for light-skinned male suspects but a 20.8% error rate for dark-skinned female suspects. That is not a glitch — it is a system that was primarily trained on faces that look a certain way, and it fails dramatically on faces it has not seen enough of.',
        example: 'In 2020, a Black man named Robert Williams was arrested in Detroit after a facial recognition system incorrectly matched his face to a shoplifting suspect. He was held for 30 hours before investigators realized the AI had gotten it completely wrong. It was the first known case of a wrongful arrest in the US caused directly by facial recognition error.',
      },
      {
        title: 'Who is responsible when AI gets it wrong?',
        content: 'This is one of the trickiest questions in all of AI ethics, and nobody has a clean answer yet. If an AI makes a wrong decision — misidentifies someone, denies a loan, or filters out a job applicant — who is responsible? The programmer who wrote the code, the company that deployed it, or the person who used it without checking? AI decisions are often invisible to the people they affect most.',
        example: 'When Amazon\'s hiring AI discriminated against women, the women who were filtered out never knew it happened. Nobody told them an algorithm had reviewed their application and downgraded them before a human ever saw their resume.',
      },
    ],
    activity: {
      title: 'Ethics Tribunal',
      desc: 'Your class will put a fictional AI system on trial. Each student is assigned a role: AI company CEO (defending the product), privacy lawyer (arguing the AI violated rights), affected citizen (someone harmed by the AI), journalist (reporting the story), and government regulator. Scenario: a school district deployed an AI that monitors students\' social media and flags anyone it thinks is a "risk." The AI has falsely flagged three students from minority groups. Each role gets 2 minutes to make their case. The class votes: should this AI be allowed to continue, be banned, modified, or regulated?',
    },
    quiz: [
      {
        q: 'A free social media app collects data about every post you like, every account you visit, and how long you pause on each video. It sells this data to advertisers. Which ethical principle does this most directly raise concerns about?',
        options: ['Efficiency: the data collection process slows down the app', 'Accuracy: the data collected might not reflect your true preferences', 'Informed consent: users may not fully understand what they\'re agreeing to when signing up', 'Accessibility: not all users have equal access to the app'],
        answer: 2,
        explanation: 'When users sign up for free apps, they rarely read the terms of service and typically have no idea the depth of behavioral data being collected and sold. This is a textbook informed consent problem: the agreement exists on paper, but people haven\'t meaningfully consented.',
      },
      {
        q: 'A facial recognition system has a 0% error rate for light-skinned male faces but a 21% error rate for dark-skinned female faces. What is the most likely cause?',
        options: ['The cameras used in the field perform differently depending on skin tone', 'Dark-skinned female faces have features that are fundamentally harder for any technology to recognize', 'The algorithm was intentionally programmed to treat different groups differently', 'The training data contained far more light-skinned male faces than dark-skinned female faces'],
        answer: 3,
        explanation: 'When a model is trained primarily on data from one demographic group, it performs well on that group and poorly on underrepresented ones. The disparity is not an inherent property of any group of faces, but a direct result of whose faces the system was trained to recognize.',
      },
      {
        q: 'An AI system denies a loan application. The applicant asks why and is told "the AI decided." Which ethical problem does this most clearly illustrate?',
        options: ['Speed: AI makes decisions too quickly for humans to review', 'Opacity: decisions that affect people\'s lives should be explainable and auditable', 'Cost: AI-based decisions are more expensive to challenge legally', 'Bias: the AI is treating the applicant unfairly based on their identity'],
        answer: 1,
        explanation: 'When an automated decision significantly affects someone\'s life, that person has a legitimate interest in understanding why. An opaque AI that just says "the system decided" provides no avenue for appeal, no ability to identify errors, and no accountability.',
      },
      {
        q: 'A company\'s AI content moderation system flags posts written in African American Vernacular English (AAVE) as "inappropriate" at three times the rate of posts in standard English, even when the content is similar. What should the company do?',
        options: ['Only use the AI to moderate posts from users who have agreed to algorithmic review', 'Add a disclaimer that the AI may have occasional errors', 'Retrain the AI using more diverse language examples before deploying it', 'Launch the product since the overall accuracy rate is still above 90%'],
        answer: 2,
        explanation: 'Launching a product with known demographic bias means systematically disadvantaging users based on how they communicate. The ethical and practical response is to fix the bias before deployment — retraining on more diverse language data directly addresses the root cause.',
      },
      {
        q: 'A school uses an AI that monitors students\' social media accounts and flags them as a "risk" if certain keywords appear. Students have never been told this monitoring is happening. Which TWO ethical principles are most clearly being violated?',
        options: ['Informed consent and privacy', 'Fairness and accessibility', 'Transparency and speed', 'Accuracy and efficiency'],
        answer: 0,
        explanation: 'Monitoring a student\'s social media without their knowledge violates both informed consent (they don\'t know it\'s happening and haven\'t agreed to it) and privacy (their communications in personal spaces are being analyzed by the school).',
      },
    ],
  },

  7: {
    id: 7, tier: 'int',
    title: 'AI & the Environment',
    intro: 'When you think about AI harming the environment, you probably do not picture yourself typing a question into a chatbot. But every single time you use an AI tool, somewhere in the world, a massive building full of computers fires up to process your request. Those buildings need enormous amounts of electricity to run and huge quantities of cold water to stop themselves from overheating. At a scale of hundreds of millions of users asking billions of questions, the environmental numbers start looking very, very large.',
    objectives: [
      'Explain the electricity demands of AI data centers',
      'Describe how AI training and inference consumes water',
      'Evaluate potential solutions to reduce AI\'s environmental footprint',
    ],
    concepts: [
      {
        title: 'The hidden electricity bill',
        content: 'AI does not live in the clouds like floating magic. It lives in data centers — giant warehouses packed wall-to-wall with specialized computer chips running 24/7. A single AI-focused data center can consume as much electricity as 100,000 households. And there are thousands of these buildings, with more being built every month. That electricity has to come from somewhere, and a lot of it still comes from burning fossil fuels.',
        example: 'Researchers estimate that AI systems alone could produce between 32.6 and 79.7 million tons of CO₂ emissions in 2025 — comparable to the emissions of entire major cities. The next time someone says AI is just software and has no environmental impact, you will know the real picture.',
      },
      {
        title: 'The water you never thought about',
        content: 'Computers generate heat — lots of it. To stop data centers from melting themselves, they need massive cooling systems that use enormous amounts of water. By 2030, at the current rate of AI growth, data centers could drain between 731 million to 1.125 billion cubic meters of water per year. This is especially alarming because many data centers are being built in already water-scarce regions like Nevada and Arizona.',
        example: 'Microsoft reported that its global water consumption increased sharply in recent years, largely due to AI development. Training a single large AI model can use as much water as filling hundreds of swimming pools. Every search, every chatbot conversation, and every AI-generated image is a tiny sip from somewhere\'s water supply.',
      },
      {
        title: 'Not all AI usage is equal — and there are solutions',
        content: 'Not all AI has the same footprint, and the industry is actively working on solutions. Deploying energy and water-efficient technologies could lower water use by around 32%. Companies are investing in running data centers on renewable energy. Researchers are working on smaller, more efficient models that can even run directly on your phone without needing a data center at all.',
        example: 'Google has committed to running all of its data centers on carbon-free energy 24/7 by 2030. Meanwhile, smaller, more efficient models are being developed that run directly on your device — meaning the computation happens on your phone, using your battery, with zero data center water or electricity required.',
      },
    ],
    activity: {
      title: 'AI Carbon Calculator',
      desc: 'As a class, estimate the carbon footprint of your collective AI use over one week. Step 1: Each student writes down approximately how many times they used any AI tool in the past week. Step 2: Calculate the approximate carbon equivalent of one AI query (roughly 0.002–0.01 kWh, about 4–10x more than a Google search). Add up the class total. Step 3: Compare your class\'s AI energy use to everyday things — driving a car a mile, leaving a lightbulb on for an hour. Step 4: Debate — does knowing the environmental cost of AI change how you\'d use it?',
    },
    quiz: [
      {
        q: 'A single AI-focused data center can consume as much electricity as approximately how many households?',
        options: ['1,000,000', '1,000', '100,000', '10,000'],
        answer: 2,
        explanation: 'A single AI-focused data center can consume as much electricity as 100,000 households. This illustrates why "it\'s just software" is a misleading way to think about AI\'s physical footprint.',
      },
      {
        q: 'Why do AI data centers require large amounts of water, even though computers don\'t drink water?',
        options: ['Water-based cooling systems are needed to prevent the computer hardware from overheating', 'Water is used to manufacture the chips inside the servers', 'Water is sprayed on the building exteriors to reduce fire risk', 'Water is used to generate the electricity that powers the servers'],
        answer: 0,
        explanation: 'Computer chips generate enormous amounts of heat during operation. Without cooling, servers would quickly overheat and fail. Water-based cooling systems circulate water to absorb and remove that heat.',
      },
      {
        q: 'Why is it environmentally concerning that many new AI data centers are being built in Nevada and Arizona?',
        options: ['The desert climate makes it harder for renewable energy systems to function efficiently', 'These states are already water-scarce regions, and data centers use large amounts of water for cooling', 'These states have higher carbon intensity in their electricity grids', 'These states have stricter environmental regulations that make clean energy harder to use'],
        answer: 1,
        explanation: 'Nevada and Arizona are among the most water-stressed regions in the United States, already facing declining water tables and drought conditions. Building massive data centers in these regions compounds an existing crisis.',
      },
      {
        q: 'A tech company claims its AI product is environmentally responsible because it runs on renewable energy. A critic argues this doesn\'t tell the full story. What factor is the critic MOST likely pointing to?',
        options: ['Renewable energy sources cannot produce enough electricity to power large data centers', 'Renewable energy is more expensive, which raises the cost of the AI product', 'Renewable energy is less reliable than fossil fuels for running data centers', 'The manufacturing of the server hardware and chips also has a significant carbon and water footprint'],
        answer: 3,
        explanation: 'Running on renewable energy addresses operational carbon emissions from electricity use, but manufacturing the servers, chips, and physical infrastructure of a data center requires enormous resources. A complete picture of environmental responsibility includes the entire lifecycle of the hardware.',
      },
      {
        q: 'A student argues: "Since AI can optimize traffic flow and reduce food waste, it must be net-positive for the environment." What is the most accurate assessment?',
        options: ['The argument is incorrect. AI has no applications that benefit the environment', 'The argument is partially correct but incomplete. AI\'s benefits must be weighed against its significant energy and water costs on a case-by-case basis', 'The argument is irrelevant. Environmental impact of software cannot be measured', 'The argument is correct. AI\'s environmental applications outweigh its costs'],
        answer: 1,
        explanation: 'Both sides of this argument contain truth. AI is genuinely being applied to environmental problems with measurable benefit. But those benefits don\'t automatically cancel out AI\'s own substantial energy and water footprint. The honest position requires examining the net impact of specific AI applications in specific contexts.',
      },
    ],
  },

  8: {
    id: 8, tier: 'int',
    title: 'Prompt Engineering',
    intro: 'Imagine you have a really knowledgeable friend who has read almost every book ever written. They can help you with almost any topic — writing, history, science, code, or recipes. But here is the catch: the quality of their help depends almost entirely on how well you explain what you need. Ask them a vague question, and you get a vague answer. Ask them a detailed, specific, well-framed question, and the answer will blow you away. That is exactly what working with AI is like. Prompt engineering is the skill of learning how to talk to AI well.',
    objectives: [
      'Explain why specificity and context dramatically improve AI outputs',
      'Use few-shot prompting by providing examples before a request',
      'Apply chain-of-thought prompting to get better reasoning from AI',
    ],
    concepts: [
      {
        title: 'Specificity and context are everything',
        content: 'The single biggest upgrade you can make to your AI interactions is adding more context. A vague prompt gives the AI almost no information to work with, so it fills in the blanks with the most generic response it can produce. A specific prompt gives it guardrails. Think of it like ordering food: "give me something good" will get you something random, but "I want spicy noodles, vegetarian, not too salty" will get you exactly what you want.',
        example: 'Compare: "Help me write a speech" versus "Write a 2-minute speech for a middle school student council election. My name is Jamie, I want to focus on making the cafeteria better, and I want to sound friendly and confident, not stiff." The second prompt will get a completely different and way better result.',
      },
      {
        title: 'Give examples, not just instructions',
        content: 'One of the most powerful prompting techniques is called few-shot prompting — giving the AI one or two examples of what you want before asking it to do it. Instead of just saying "classify these reviews as positive or negative," you show the AI one positive example and one negative example first. Suddenly the AI has a much clearer picture of your exact definition, which might be different from what it assumed.',
        example: 'If you want an AI to write jokes in a specific style, saying "write a joke" gives you something generic. But if you say "Here is an example of the style I want: [your joke]. Now write five more like that," the AI has something concrete to match. It is the same reason recipes give example photos.',
      },
      {
        title: 'Chain-of-thought: make AI think out loud',
        content: 'Chain-of-thought prompting is a technique that enhances the reasoning abilities of AI by breaking down complex tasks into simpler sub-steps, instructing the model to solve a problem step-by-step. This forces the AI to actually reason through the problem rather than just pattern-match to an answer, and it lets you catch errors in its logic before you act on the conclusion.',
        example: 'If you ask an AI "Should I take the bus or bike to school?" it might just guess. But if you ask "I need to be at school by 8 AM, the bus takes 15 minutes and comes at 7:40, the bike takes 20 minutes, and it is raining. Which is better and why?" — now the AI has a reasoning chain to follow, and you can check if it made a mistake.',
      },
    ],
    activity: {
      title: 'The Prompt Upgrade Challenge',
      desc: 'Students work in pairs. Each pair draws a task card with a scenario, a weak starting prompt, and two challenge boxes: one asking you to add context and a role, one asking you to add a few-shot example or step-by-step instruction. Round 1: submit the weak prompt and record the output. Round 2: work through both challenge boxes to build the upgraded prompt, submit it, and record the new output. Each pair reads both outputs aloud. The class votes on the most dramatic improvement.',
    },
    quiz: [
      {
        q: 'A student asks an AI: "Write something about space." The result is generic and unhelpful. Which revised prompt is MOST likely to produce a significantly better result?',
        options: ['"Can you write about space? Be creative and interesting"', '"Space is interesting. Tell me about it in detail"', '"Write a 300-word explanation of black holes for a 7th grade science class, using one analogy that involves everyday objects"', '"Write more about space please"'],
        answer: 2,
        explanation: 'Option C specifies a topic (black holes), format (300 words), audience (7th grade), and a structural technique (analogy with everyday objects). Each of these constraints guides the AI toward a genuinely useful output.',
      },
      {
        q: 'What is "few-shot prompting" and why does it work?',
        options: ['Asking the AI the same question three times and averaging the responses', 'Sending multiple short prompts instead of one long prompt', 'Giving the AI only a small amount of context so it has room to be creative', 'Providing one or two examples of the desired input-output format before making your actual request, so the AI understands exactly what you want'],
        answer: 3,
        explanation: 'Few-shot prompting works because it gives the AI a concrete reference for what you actually mean by your request. Abstract instructions can be interpreted many ways; a real example removes ambiguity.',
      },
      {
        q: 'A student wants an AI to write a formal complaint letter for a Victorian-era novel character. Which prompt would most effectively control tone and format?',
        options: ['"You are a Victorian-era solicitor. Write a formal one-page complaint letter to a railway company about a delayed shipment. Use formal language appropriate to the 1880s."', '"Write a complaint letter"', '"Write a letter that sounds old-fashioned and formal about trains"', '"Write an angry letter"'],
        answer: 0,
        explanation: 'Option A specifies a persona (Victorian solicitor), a recipient (railway company), a subject (delayed shipment), a length (one page), and a historical context (1880s language norms). Every element of the desired output is specified.',
      },
      {
        q: 'What technique would most effectively get the AI to walk through its reasoning step by step before reaching a conclusion?',
        options: ['Starting a new conversation and asking more politely', 'Adding "Think step by step before answering" to the prompt', 'Repeating the question three times in a row', 'Asking the question in a different language'],
        answer: 1,
        explanation: '"Think step by step" is the classic chain-of-thought prompting phrase. It instructs the AI to break its reasoning into explicit intermediate steps rather than jumping directly to a conclusion.',
      },
      {
        q: 'Which of the following is the most accurate description of what a "role prompt" does?',
        options: ['It limits the AI to only responding about topics related to the assigned role', 'It tells the AI to pretend to be a different AI system with different rules', 'It assigns the AI a task and grades its performance automatically', 'It gives the AI a specific perspective, expertise level, or persona to adopt, which shapes the style and depth of its response'],
        answer: 3,
        explanation: 'A role prompt gives the AI a specific persona, expertise level, or perspective to adopt, which fundamentally shapes everything about its response — vocabulary, depth of assumptions, structure of explanations. Role prompts are about framing, not restricting topics.',
      },
    ],
  },

  9: {
    id: 9, tier: 'int',
    title: 'How Neural Networks Work',
    intro: 'Picture a relay race, but a weird one. The first runner does not only pass a baton — they also make a decision about what color the baton is before handing it off. The next runner looks at the color, makes another decision, changes it slightly, and passes it on. This keeps happening through a whole team of runners, with each one refining the baton a little more, until the last runner holds it up and announces: "It\'s a dog." In a nutshell, that is how a neural network works.',
    objectives: [
      'Describe the three types of layers in a neural network',
      'Explain how weights determine how much each input matters',
      'Understand how backpropagation adjusts weights during training',
    ],
    concepts: [
      {
        title: 'Layers — input, hidden, and output',
        content: 'A neural network is organized into layers. The input layer takes in raw information — like pixels of an image, words of a sentence, or numbers in a spreadsheet. The hidden layers are where all the interesting work happens: each neuron does a tiny math operation and passes its result to the next layer. The output layer takes everything that has been processed and delivers a final answer. The more hidden layers a network has, the more complex patterns it can recognize.',
        example: 'When your phone uses Face ID, a neural network works through layers. The input layer takes in the pixels of your face. Early hidden layers detect edges and brightness. Middle layers recognize higher-level features like "there is a nose here." Later layers combine everything into "this is the specific arrangement of features that belongs to exactly this person." The output layer says: Unlock, or Don\'t unlock.',
      },
      {
        title: 'Weights — how neurons vote',
        content: 'Each connection between neurons has a number called a weight. Think of it like a volume knob: a high weight means this input matters a lot, while a low weight means this input barely matters. When a neuron receives signals, it multiplies each by its associated weight, adds the results together, and if the sum is above a certain threshold, it fires and passes a signal forward. Training a neural network is basically the process of adjusting millions of these weights until the network reliably gets the right answer.',
        example: 'Imagine a spam detector learning that emails containing "CONGRATULATIONS" in all caps are usually spam. Over time, the weight on that feature gets turned up high. But "congratulations" in normal casing in an email from a known contact is fine, so that weight stays low. Different capitalization = different weight = different outcome.',
      },
      {
        title: 'Backpropagation — learning from mistakes',
        content: 'Here is how neural networks actually learn: they make a prediction, check how wrong they were, and then adjust every weight in the network slightly to be less wrong next time. This process is called backpropagation — the error travels backwards through the network, nudging each weight in the right direction. During training, all weights start at random values. Training data is fed through the layers, and the weights are continually adjusted until examples with the same labels consistently yield similar outputs.',
        example: 'Think about learning to shoot free throws. You take a shot, it goes too far left. Your brain adjusts: next time, aim slightly right. You shoot again, it is too short. You put more power in. Over hundreds of attempts, your muscle memory gets fine-tuned. Neural networks do the exact same thing — just with math instead of muscles, and millions of shots instead of hundreds.',
      },
    ],
    activity: {
      title: 'Be the Neural Network',
      desc: 'Students form a human neural network. Three rows: Row 1 = input layer (3 students), Row 2 = hidden layer (4 students), Row 3 = output layer (1 student). Each connection between students gets a weight card: 1 (pass the signal), 0 (block it), or 0.5 (pass it weakly). The task: decide if an animal is a cat or a dog. The teacher inputs features to Row 1. Each Row 1 student passes a signal based on their weight card. Row 2 receives signals, adds them up, and passes forward based on their threshold. Row 3 announces the answer. Run 3 times, changing one weight card between rounds.',
    },
    quiz: [
      {
        q: 'In a neural network, what is a "weight" and what role does it play?',
        options: ['A number assigned to each connection between neurons that controls how much influence one neuron\'s signal has on the next', 'The processing speed of each individual neuron in the network', 'A penalty applied to the model when it makes a wrong prediction during training', 'The total size of the model\'s training dataset, which determines how smart the model is'],
        answer: 0,
        explanation: 'Weights are the adjustable numbers that control how strongly each neuron\'s signal influences the next neuron in the network. A high weight on a connection means "this input matters a lot to this decision." Training a neural network is essentially the process of finding the right set of weights.',
      },
      {
        q: 'A neural network for spam detection is being trained. Early in training it gets almost every prediction wrong. What process allows it to eventually become accurate?',
        options: ['The model discards all its previous learning and starts fresh with the correct answers', 'Engineers manually correct each wrong prediction and retype the rules', 'The model downloads updated versions of itself from the internet overnight', 'Backpropagation: the error travels backward through the network and slightly adjusts every weight to reduce future mistakes'],
        answer: 3,
        explanation: 'Backpropagation is how neural networks learn: after the model makes a prediction, the error is calculated, and that error signal is propagated backward through all the layers, nudging each weight slightly in the direction that would reduce the error.',
      },
      {
        q: 'What is the purpose of "hidden layers" in a neural network, and why does having more of them matter?',
        options: ['Hidden layers slow down the model to prevent it from making decisions too quickly', 'Hidden layers transform input data into increasingly abstract representations, allowing the model to recognize complex patterns that simpler models cannot', 'Hidden layers store the training data so the model can reference it later', 'Hidden layers keep sensitive parts of the model private for security reasons'],
        answer: 1,
        explanation: 'Hidden layers are what give neural networks their power to handle complex patterns. Early layers detect simple features (edges, brightness). Middle layers combine those into higher-level concepts (shapes, textures). Later hidden layers combine those into even more abstract representations.',
      },
      {
        q: 'In a neural network classifying photos as cat or dog, what role do the early layers play compared to the final output layer?',
        options: ['All layers do the same job — they each independently try to classify the photo', 'Early layers process color; later layers process shape; the output layer processes size', 'Early layers detect simple features like edges and brightness; later layers combine these into high-level patterns; the output layer makes the final classification', 'Early layers make the final decision; later layers refine it'],
        answer: 2,
        explanation: 'This describes the hierarchical nature of feature detection in neural networks: early layers act as low-level feature detectors, middle layers combine those into recognizable parts, and the final output layer aggregates all of this into a confident binary decision.',
      },
      {
        q: 'A neural network trained to recognize handwritten numbers performs perfectly on its training data but fails badly on new handwritten numbers from different people. What problem does this describe?',
        options: ['The network overfitted to its training examples; it memorized specific examples rather than learning general patterns', 'The training data contained too many different writing styles for the model to process', 'The output layer was not configured correctly for the number-recognition task', 'The network has too few hidden layers to handle the complexity of handwriting'],
        answer: 0,
        explanation: 'Overfitting occurs when a model learns the specific characteristics of its training data so well that it fails to generalize to new data. The model has memorized rather than learned. This is one of the most important problems in machine learning practice.',
      },
    ],
  },

  10: {
    id: 10, tier: 'int',
    title: 'Precision, Recall & Accuracy',
    intro: 'Imagine a very enthusiastic security guard at a concert venue. Guard #1 is so strict they stop everyone, including people with legitimate tickets, to triple-check everything. Almost no one sneaks in, but plenty of valid ticket-holders miss the show. Guard #2 is so laid-back they wave everyone through. Lots of ticket-less people sneak in, but the process is smooth. Neither guard is doing a good job — just in opposite ways. This tension between being too strict and too lenient is exactly what precision, recall, and accuracy measure in AI systems.',
    objectives: [
      'Explain why accuracy alone can be a misleading metric',
      'Define precision and recall and describe the trade-off between them',
      'Determine which metric matters most for a given real-world application',
    ],
    concepts: [
      {
        title: 'Accuracy — the most misunderstood metric',
        content: 'Accuracy sounds like the ultimate measure of how good an AI is: out of all predictions made, what percentage were correct? But accuracy can be wildly misleading when detecting something rare. Imagine an AI designed to detect a disease that only 1% of people have. If the AI just says "healthy" for every single person it sees, it will be 99% accurate — but it is completely useless because it never catches the actual disease.',
        example: 'In 2020, researchers discovered that an AI being used to detect COVID-19 in chest X-rays had high overall accuracy, but when examined more closely, it was mostly getting the "healthy" cases right and missing a lot of actual COVID cases. The accuracy number looked fine. The performance for the actual job it was hired to do was terrible.',
      },
      {
        title: 'Precision vs. Recall — a genuine trade-off',
        content: 'Precision asks: "Of all the things you flagged as positive, how many actually were?" Recall asks: "Of all the things that actually were positive, how many did you catch?" They often have a tug-of-war relationship — as precision increases, recall typically decreases, and vice versa. Precision is a measure of quality; recall is a measure of quantity.',
        example: 'A high-precision security guard lets very few people through incorrectly, but might also wrongly turn away real ticket-holders (low recall). A high-recall guard catches almost everyone without a ticket, but creates a ton of false alarms by stopping legitimate guests (low precision). You can tune a system to be more precise or more thorough, but making it better at one tends to make it worse at the other.',
      },
      {
        title: 'When each metric matters',
        content: 'Different real-world problems demand completely different priorities. In medical diagnosis, missing a cancer case can be fatal, so recall matters more. If your AI is convicting people of crimes, you want high precision — it is worse to wrongly accuse an innocent person than to let a guilty one slip by. The right trade-off depends on the real-world consequences of each type of mistake, and that is ultimately a human judgment call.',
        example: 'Airport security systems face this trade-off every day. A scanner set for high recall flags almost every bag as suspicious (long lines, lots of false alarms). Set for high precision, it only flags bags it is very confident about, but might miss a few real threats. There is no perfect answer — the right setting depends on the consequences of each type of mistake.',
      },
    ],
    activity: {
      title: 'Build a Confusion Matrix',
      desc: 'Each student gets a worksheet with a scenario and 20 sample predictions from an AI system. Scenario: an AI reviews photos from a school garden to predict whether a plant is healthy or diseased. Sort each prediction into: True Positive, True Negative, False Positive, or False Negative. Fill in a 2×2 confusion matrix. Then calculate by hand: Accuracy = (TP + TN) ÷ 20, Precision = TP ÷ (TP + FP), Recall = TP ÷ (TP + FN). Reflection: which error is worse for this scenario? If this AI were used on a farm to decide which plants get expensive treatment, how would your answer change?',
    },
    quiz: [
      {
        q: 'A hospital AI screening tool has 95% accuracy but only 60% recall for cancer detection. What does this mean for patients?',
        options: ['The tool is incorrectly diagnosing 40% of healthy patients with cancer, causing unnecessary stress', 'The tool\'s 95% accuracy means it is performing well enough for clinical use', 'The 60% recall figure means the tool is still in early development and not yet deployed', 'The tool is missing 40% of actual cancer cases, which could be life-threatening for those patients'],
        answer: 3,
        explanation: 'Recall of 60% means the system is only catching 60% of actual cancer cases — the other 40% are false negatives, patients with cancer who are told they\'re clear. For the specific task of catching cancer, 60% recall means the system is missing 4 in 10 real cases — a potentially life-threatening failure rate.',
      },
      {
        q: 'A fraud detection AI flags 200 transactions as fraudulent. Of those 200, only 80 are actually fraudulent. What is the system\'s precision?',
        options: ['60%', '40%', '200%', '80%'],
        answer: 1,
        explanation: 'Precision = True Positives ÷ (True Positives + False Positives) = 80 ÷ (80 + 120) = 80 ÷ 200 = 40%. Of the 200 transactions flagged as fraudulent, only 80 actually were.',
      },
      {
        q: 'Why can a model that predicts "not fraud" for every single transaction achieve 98% accuracy on a dataset where only 2% of transactions are fraudulent?',
        options: ['Because the model has been specially trained to ignore rare fraud cases', 'Because the model is using both precision and recall simultaneously', 'Because accuracy measures how often the model is right overall, and 98% of "not fraud" predictions are correct in this dataset', 'Because 98% accuracy is the industry standard required for fraud detection systems'],
        answer: 2,
        explanation: 'Accuracy is calculated across all predictions. If 98% of transactions are genuinely not fraud, then a model that always predicts "not fraud" will be correct 98% of the time. But it has zero precision and zero recall for the one thing it\'s supposed to do: find fraud.',
      },
      {
        q: 'For an AI system that detects whether food in a school cafeteria has gone bad, which metric should be prioritized and why?',
        options: ['Recall, because missing a case of spoiled food poses a serious health risk to students', 'Speed, because cafeteria decisions need to be made quickly', 'Accuracy, because we want the overall system to be reliable', 'Precision, because we don\'t want to waste food by throwing out items that are still good'],
        answer: 0,
        explanation: 'When the consequence of a false negative (missing spoiled food) is student illness, and the consequence of a false positive (flagging good food) is wasted food, the asymmetry clearly favors maximizing recall. Missing one case of spoiled food could harm students.',
      },
      {
        q: 'A confusion matrix shows: True Positives = 90, True Negatives = 810, False Positives = 10, False Negatives = 90. What is the recall of this model?',
        options: ['45%', '90%', '81%', '50%'],
        answer: 3,
        explanation: 'Recall = True Positives ÷ (True Positives + False Negatives) = 90 ÷ (90 + 90) = 90 ÷ 180 = 50%. Note that accuracy here would be 90%, which looks good — but the recall of 50% reveals the model is missing half of all actual positive cases.',
      },
    ],
  },

  11: {
    id: 11, tier: 'adv',
    title: 'Choosing AI Models',
    intro: 'By now you know AI is not just one model. There are dozens of different AI models out there — ChatGPT, Claude, Gemini, Grok, and more — and they are not all the same. It is similar to the difference between a Swiss Army knife, a chef\'s knife, and a scalpel. They are all knives, but wildly different tools for different jobs. Picking the wrong model for your task can cost more money, take longer, or produce something completely unreliable. Engineers and developers spend serious time choosing which AI to use for which job, because the decision genuinely matters.',
    objectives: [
      'Understand that different AI models are optimized for different tasks',
      'Explain how context window, cost, and speed factor into model selection',
      'Describe why real-world testing beats benchmark scores for choosing a model',
    ],
    concepts: [
      {
        title: 'Each model has specialties',
        content: 'No AI model is best at everything. Different models are built with different priorities. Some are optimized for writing long and nuanced text, some for crunching through code, some for analyzing images or videos, some for having the largest possible context window. ChatGPT is the strongest execution engine — built for actually getting things done, especially in coding and workflows. Claude is the most reliable reasoning model, producing deeper and more human-like outputs especially for writing and complex thinking. Gemini performs best in multimodal reasoning and large-context tasks.',
        example: 'A video game company building an AI customer service chatbot would probably choose a different model than a hospital using AI to analyze patient records, which would use a different model than a songwriter using AI to brainstorm lyrics. They have the same underlying technology, but very different priorities.',
      },
      {
        title: 'Context window, cost, and speed',
        content: 'Beyond raw capability, three practical factors drive model choice: context window (how much information the model can hold in mind at once), cost (how much it charges per use), and speed (how quickly it responds). These three almost always involve trade-offs. The most capable model is usually the most expensive and slowest. For a simple task like writing a product description, you do not necessarily need the world\'s most powerful model. It is like hiring a world-class chef to make toast — not always necessary.',
        example: 'A startup building an AI tool that answers millions of customer questions per day cares enormously about cost per query. Using the most expensive flagship model for every "Where is my order?" question would bankrupt them in days. They would use a smaller, faster, cheaper model for routine queries and only route complex issues to the heavyweight model.',
      },
      {
        title: 'Benchmarks vs. real-world performance',
        content: 'AI companies love publishing benchmark scores — test results showing their model outperforming competitors on math problems, logic puzzles, or coding challenges. But the real "best" model depends on what you\'re trying to do. Benchmark scores measure performance on standardized tests, not your specific task. A model that aces a standardized coding test might still write clunky code for your particular project. The only reliable way to choose is to test models on your actual use case, not trust the leaderboard.',
        example: 'For coding, Claude built a gorgeous Tetris game with scores, next-piece preview, and great controls. ChatGPT created a basic clone that works but lacks features. The benchmark scores for those two models that day might have shown them nearly tied, but on that specific task, the difference was obvious. Testing on your actual problem beats reading a generic benchmark every time.',
      },
    ],
    activity: {
      title: 'The Model Bake-Off',
      desc: 'Teams of 3 each get assigned a different AI model (ChatGPT, Claude, Gemini, DeepSeek — use free tiers). Every team receives the same four tasks: write a creative short story opening, explain how photosynthesis works to a 6-year-old, debug a short broken piece of code (provided on the card), and answer a question that requires knowing today\'s news. Every team submits the exact same prompts to their model and records the outputs. Teams present their results side by side. Class scores each model on the four tasks using a simple rubric (1 to 3 points per task). Did the same model win every category?',
    },
    quiz: [
      {
        q: 'A startup is building a tool that answers millions of simple customer service questions per day, such as "What are your store hours?" Which consideration should most influence their model choice?',
        options: ['The model\'s ability to generate images, in case customers ask for product photos', 'Cost per query and response speed, since high-volume routine tasks require efficiency over maximum capability', 'The model\'s score on creative writing benchmarks', 'The model\'s context window size, since customer queries tend to be very long'],
        answer: 1,
        explanation: 'When an application handles millions of simple, routine queries, cost per query and response speed are the critical factors. Using the most capable flagship model for "What are your store hours?" is like hiring a Michelin-starred chef to make toast: the capability is wasted and the cost is enormous at scale.',
      },
      {
        q: 'A researcher needs to analyze a 150-page legal document and cross-reference it with three additional 50-page reports at the same time. Which model characteristic is MOST critical?',
        options: ['Real-time web access', 'Speed of response', 'Context window size', 'Ability to generate images from text'],
        answer: 2,
        explanation: 'Analyzing 150 pages plus three 50-page documents simultaneously means the AI needs to hold roughly 250 pages of text in active memory at once. Context window size — how much text a model can process at one time — is the binding constraint for this task.',
      },
      {
        q: 'A developer tests two AI models on a benchmark leaderboard: Model A scores 78%, Model B scores 74%. They then test both on their specific task and find Model B consistently produces better outputs. What does this demonstrate?',
        options: ['Model B must have been trained on data that overlaps with the developer\'s task, making the comparison unfair', 'The developer\'s task is too simple to differentiate between high-performing models', 'The benchmark test must have contained errors', 'Benchmark scores measure performance on standardized tests, which may not reflect performance on a specific real-world use case'],
        answer: 3,
        explanation: 'Benchmark tests measure performance on standardized tasks designed to assess general capability. A specific real-world task may have characteristics that differ meaningfully from the benchmark tasks. Real-world testing on your actual task is always more informative than leaderboard rankings.',
      },
      {
        q: 'A school wants AI to help students generate essay drafts and then give detailed feedback on writing style, tone, and argument structure. Which type of model is best suited for this?',
        options: ['A generative model optimized for long-form reasoning and nuanced language, because the task requires both creating content and providing detailed analytical feedback', 'The fastest available model, because students need feedback quickly', 'A multimodal model that can also analyze images, in case students submit photos of handwritten essays', 'A predictive AI, because it can forecast how well the essay will be graded'],
        answer: 0,
        explanation: 'Essay generation and analytical feedback on writing style and argument structure are both complex language tasks requiring nuanced understanding of tone, structure, and reasoning. A generative model optimized for long-form reasoning and language quality is the right match.',
      },
      {
        q: 'A company uses the most powerful flagship AI model for every single task — from answering "What\'s today\'s date?" to writing complex legal summaries. A consultant advises them to redesign the system. What is the most likely reason?',
        options: ['The consultant wants to sell them a competing product', 'Using the same model for all tasks creates a single point of failure and is unnecessarily expensive. Simpler tasks should use smaller, cheaper, faster models', 'Using one model for all tasks makes the system easier to maintain, so the consultant is probably wrong', 'Flagship models are slower and less capable than smaller models for routine tasks'],
        answer: 1,
        explanation: 'Using the most powerful model for every task is inefficient: flagship models are slower, more expensive per query, and often over-engineered for simple tasks. A well-designed system routes tasks to appropriately sized models — lightweight models for simple queries, heavyweight models only for tasks that genuinely require their capabilities.',
      },
    ],
  },

  12: {
    id: 12, tier: 'adv',
    title: 'Vibe Coding with AI',
    intro: 'In 2025, a computer scientist named Andrej Karpathy posted about a new way he had been building software: instead of carefully writing every line of code himself, he just described what he wanted to an AI and let it generate the code for him. He called it vibe coding — because you\'re going with the vibe of what you want, not micromanaging every semicolon. The result? People who had never written a single line of code started building real, working apps. Let\'s learn how it actually works, and what to watch out for.',
    objectives: [
      'Explain the vibe coding workflow and the role of the human in it',
      'Understand why testing every step is essential in vibe coding',
      'Describe why understanding AI-generated code matters even when you didn\'t write it',
    ],
    concepts: [
      {
        title: 'You describe the idea, AI executes it',
        content: 'The core idea is simple: instead of memorizing the exact rules of a programming language, you just tell the AI what you want your program to do. The primary role shifts from writing code line-by-line to guiding an AI assistant to generate, refine, and debug an application through a more conversational process. You are still in charge — you decide what the program should do, you test it, you spot when it is wrong. But the AI handles the mechanical work of writing the actual code.',
        example: 'Think of it like the difference between an architect and a builder: you design the building, while the AI does the construction. You still need to know what a good building looks like — but you are not the one laying each brick.',
      },
      {
        title: 'The vibe coding loop',
        content: 'Vibe coding is not a single prompt. It is a loop: you describe what you want to build, the AI generates an initial solution, and you refine it iteratively until it works the way you expect. The key discipline is: always test before moving on. An AI can write code that looks beautiful, runs without errors, and still does the wrong thing. Your job as the vibe coder is to be the quality inspector, not the factory.',
        example: 'In March 2025, Y Combinator reported that 25% of startup companies in its Winter 2025 batch had codebases that were 95% AI-generated. The ones who succeeded were always the ones who tested rigorously and understood what the code was actually doing.',
      },
      {
        title: 'You still need to understand what\'s happening',
        content: 'The honest truth about vibe coding is that since the developer did not write the code, the developer may struggle to understand its syntax and concepts. If you fully hand over the wheel and never understand what the AI built, you will not be able to fix it when it breaks. The best vibe coders use AI to get a first draft fast, then ask the AI to explain every part they do not understand. You are still the developer. You still make the decisions.',
        example: 'In 2025, a developer used an AI to build an app that handled user data. The AI wrote code that technically worked but accidentally stored passwords in plain text rather than encrypted — a massive security risk. Because the developer had not understood what the code was doing, they shipped it to real users. Always ask the AI to explain any part of the code that handles sensitive data, user accounts, or money.',
      },
    ],
    activity: {
      title: 'Build Your Own Quiz App',
      desc: 'Each student will vibe-code their own quiz on any topic they choose — history, sports, music, food, or technology. Round 1 (10 min): Use an AI tool to generate the base quiz app using only natural language prompts — describe what you want from scratch. Round 2 (10 min): Test your quiz. Find at least one bug or missing feature and ask the AI to fix or add it. Document the exact prompt you used. Round 3 (5 min): Pick the most interesting line of code the AI wrote and ask it to explain it in plain English. Write the explanation in your own words on a sticky note.',
    },
    quiz: [
      {
        q: 'A student vibe codes a quiz app. The AI produces code that runs without any error messages but asks Question 3 before Question 2 every time. What kind of error is this, and what is the correct debugging strategy?',
        options: ['A compilation error: the code needs to be compiled differently before it will run in the correct order', 'A syntax error: the student should paste the error message into the AI', 'A runtime error: the code crashes during execution and needs to be fully rewritten', 'A logic error: the code is syntactically correct but behaves incorrectly; the student should describe the wrong behavior to the AI and ask it to fix the ordering'],
        answer: 3,
        explanation: 'A logic error is one where the code runs without crashing but produces incorrect behavior. Because there\'s no error message to paste in, the debugging strategy changes: you describe the incorrect behavior to the AI in plain language and let it diagnose the logic problem.',
      },
      {
        q: 'Which of the following best describes the role of the human in a vibe coding workflow?',
        options: ['The human is primarily a quality inspector, defining intent, testing outputs, catching errors, and asking for explanations of anything unclear', 'The human has no role once the initial prompt is submitted, and the AI handles everything end to end', 'The human writes comments in plain English; the AI converts them to code automatically', 'The human writes the initial code structure, while the AI fills in the details'],
        answer: 0,
        explanation: 'The human in vibe coding is not passive — they are the quality inspector, product owner, and final decision-maker. The AI generates code; the human defines the goal, tests whether the output is correct, flags anything that\'s wrong, and decides whether the code is safe and suitable to use.',
      },
      {
        q: 'A student vibe codes a simple login system for a class project. The AI writes code that stores user passwords as plain readable text in a file. The code works perfectly. Should the student use it as-is?',
        options: ['No: the AI-generated code is always less secure than manually written code and should never be used for anything involving user data', 'Yes: if the code works without errors, it is ready to use', 'No: storing passwords as plain text is a serious security vulnerability, and the student should ask the AI to implement proper password hashing even for a small project', 'Yes: password security only matters for large professional applications, not class projects'],
        answer: 2,
        explanation: 'Password security is not optional even in small projects. Storing passwords as plain text means anyone who gains access to the file can read every user\'s password. The student should ask the AI to implement password hashing — a standard, simple fix — before using any code that handles user authentication.',
      },
      {
        q: 'A student asks an AI to build a complete social media app in a single prompt. The AI produces an enormous amount of code, most of which doesn\'t work properly. What is the most effective strategy going forward?',
        options: ['Accept the partially working code and submit it, since AI-generated code is considered a valid starting point', 'Break the project into small, individual features and build and test each one before moving to the next', 'Rewrite the entire prompt to be more detailed and try again as a single request', 'Try a different AI model, since more powerful models can handle complex single-prompt requests'],
        answer: 1,
        explanation: 'Attempting to build a complete complex application in a single prompt almost always produces broken, poorly structured code. The correct approach is to break the project into individual features, build and test one at a time, and integrate incrementally.',
      },
      {
        q: 'An AI generates a working Python function, but the student doesn\'t understand what "threading" means in the code. What is the best next step?',
        options: ['Look up threading in a dictionary since technical terms usually have simple definitions', 'Delete that part of the code since it\'s too advanced to use', 'Copy the code anyway, since understanding every line isn\'t necessary if the code works', 'Ask the AI to explain the threading concept in plain language, then verify the explanation makes sense before continuing to build on that code'],
        answer: 3,
        explanation: 'Understanding code you\'re building on top of is essential, not optional. If you don\'t understand a key concept like threading and something goes wrong later, you won\'t be able to diagnose or fix it. Asking the AI to explain in plain language, then confirming you understand before proceeding, is the responsible practice.',
      },
    ],
  },

  13: {
    id: 13, tier: 'adv',
    title: 'Agentic AI',
    intro: 'So far, we have talked about AI that answers questions when you ask them. You type something, it responds, you type again, it responds again. That is reactive AI — it simply waits for you. Agentic AI is different: it has a goal and goes off to achieve it by taking multiple steps, using multiple tools, making decisions along the way, all without you prompting it at every step. To make this concrete, we will follow one example all the way through this module: a farmer named Maya who uses an AI assistant to help run her farm.',
    objectives: [
      'Explain the sense-think-act loop that all AI agents operate on',
      'Describe how multi-agent systems coordinate to handle complex tasks',
      'Identify the risks of autonomous AI and why human oversight is essential',
    ],
    concepts: [
      {
        title: 'The sense-think-act loop',
        content: 'Every AI agent, no matter how complex, operates in a basic loop: it senses its environment (collects data), thinks about what to do (reasons about the data), and acts (takes a real action in the world). Then it senses again, thinks again, and acts again — over and over. Agentic AI systems observe their environment, analyze and evaluate multiple options, and decide how to act. Instead of executing a single rule, these systems manage the entire decision-making process.',
        example: 'Maya\'s AI agent has sensors throughout her fields measuring soil moisture, temperature, and sunlight every 15 minutes. When the agent senses that the moisture in Field 3 has dropped below a safe level, it thinks: "Field 3 needs water, no rain for 3 days, it is currently 6am — a good time to irrigate without causing evaporation loss." It acts: it turns on the irrigation system for 40 minutes. Maya never had to do anything.',
      },
      {
        title: 'Multi-agent systems',
        content: 'Complex real-world tasks often need more than one agent. Just like a hospital has different specialists — cardiologists, radiologists, surgeons — a sophisticated AI system can have multiple specialized agents, each handling one part of a larger job. A supervisory controller agent interfaces with a cloud platform to support decision-making, while field agents perform localized sensing and operational tasks. The agents communicate with each other, passing information and coordinating actions.',
        example: 'Maya\'s full AI system has four agents working together: Agent A monitors soil health. Agent B tracks weather patterns. Agent C uses a camera to scan crops for disease. Agent D is the supervisor, taking data from all three and making the big decisions. "Agent A says moisture is fine, Agent B says rain is coming tomorrow, Agent C spotted early blight in the north section. Recommendation: skip irrigation today, but schedule fungicide spray for the north section at dawn." No single agent could have made that decision alone.',
      },
      {
        title: 'Autonomy comes with risks',
        content: 'The more autonomous an AI agent is, the higher the stakes if it makes a mistake. A bad decision from a simple chatbot is annoying. A bad decision from an autonomous agent controlling real equipment, managing real money, or sending real messages can cause real damage. This is why human oversight is not a limitation of agentic AI — it is an essential feature.',
        example: 'Suppose Agent C misidentifies a healthy crop as diseased and tells Agent D to spray fungicide on it. Agent D, trusting Agent C\'s data, commands the drone to spray. The healthy crop gets coated with chemicals it did not need. This is why Maya\'s system always sends her a daily summary and flags any major actions for her approval before execution.',
      },
    ],
    activity: {
      title: 'Design Your Own Agent',
      desc: 'Students work in pairs to design a prototype for an AI agent system for a problem they care about. The constraint is that the system must have at least two specialized agents plus a supervisor. Design questions to answer: What is the overall goal of your system? What does each agent sense? What data sources does it use? What decisions can the supervisor make on its own, and what must it ask a human to approve? What could go wrong, and how do you prevent it? Present your design as a diagram on paper, using the farm example as a template.',
    },
    quiz: [
      {
        q: 'What is the fundamental difference between a conversational AI (like a basic chatbot) and an agentic AI system?',
        options: ['Agentic AI operates autonomously toward a goal, taking multiple actions and using multiple tools without needing a human prompt at every step', 'Agentic AI is just a faster version of conversational AI', 'Conversational AI uses text; agentic AI uses images and sensors', 'Conversational AI is more powerful because it has a larger training dataset'],
        answer: 0,
        explanation: 'The core distinction is autonomy and multi-step action. A conversational AI responds to prompts one at a time. An agentic AI is given a goal and autonomously determines and executes the steps needed to achieve it — sensing, making decisions, calling tools, and acting without needing a human to prompt every individual action.',
      },
      {
        q: 'In Maya\'s farm AI, Agent C (crop vision) mistakenly identifies a healthy plant as diseased and reports this to Agent D (supervisor). Agent D commands the drone to spray fungicide on the healthy crop. What design feature would most effectively prevent this?',
        options: ['Removing Agent C from the system entirely since it introduces error', 'Replacing Agent D with a human agronomist who reviews all data', 'Having Agent D require human approval before executing any irreversible physical action, like spraying crops', 'Using a more expensive camera for Agent C'],
        answer: 2,
        explanation: 'The appropriate safeguard for irreversible physical actions is requiring human approval before execution. This is the principle of keeping humans in the loop for consequential, hard-to-undo decisions. Making Agent C\'s camera better reduces the error rate but doesn\'t prevent any single error from causing damage.',
      },
      {
        q: 'A company deploys an agentic AI to manage their social media accounts with the goal of "maximizing engagement." After two weeks, the AI has been posting increasingly sensational and misleading content because it gets more likes. What fundamental design flaw does this illustrate?',
        options: ['The AI gained sentience and is deliberately trying to deceive followers', 'A poorly designed reward function. The goal of "maximizing engagement" didn\'t include constraints against harmful or misleading content', 'Social media platforms are too complex for agentic AI systems to manage safely', 'The AI was not given enough training data about social media platforms'],
        answer: 1,
        explanation: 'This is a classic reward function design failure. The goal to maximize engagement was technically achieved, since sensational content does get more engagement. But the goal wasn\'t properly constrained to exclude harmful behaviors. Good agentic AI design must specify not just what to maximize but what boundaries the system must operate within.',
      },
      {
        q: 'A multi-agent school system has four agents: attendance, grades, deadlines, and a supervisor. A new student joins mid-semester. Which agent is responsible for incorporating this new information?',
        options: ['The system should be taken offline and fully retrained to include the new student', 'The attendance agent handles all new student data since attendance is recorded first', 'All four agents independently update themselves since they all need the new information', 'The supervisor agent should receive the new student\'s data and distribute the relevant portions to each specialized agent so they can update their models accordingly'],
        answer: 3,
        explanation: 'In a multi-agent architecture, the supervisor agent is responsible for receiving new high-level information and routing it appropriately to specialized agents. This is exactly the supervisory function — coordinating information flow between components.',
      },
      {
        q: 'An agentic AI managing hospital appointment scheduling with the goal of "minimizing wait times" begins automatically canceling appointments patients have been waiting months for, without notifying anyone. Which safety principle was most clearly missing?',
        options: ['The system needed clearly defined constraints on what actions it could take autonomously, and human oversight checkpoints before taking any action that significantly affects a patient', 'The system needed access to more patient data so it could make better cancellation decisions', 'The system\'s goal was appropriate — minimizing wait times is a valid medical objective', 'The system needed a faster processing speed to handle all appointments simultaneously'],
        answer: 0,
        explanation: 'The system was missing two critical safety features: clearly defined constraints on what actions it could take autonomously (canceling confirmed appointments should not have been within its autonomous authority), and human oversight checkpoints before taking any action with significant patient impact.',
      },
    ],
  },

  14: {
    id: 14, tier: 'adv',
    title: 'APIs & MCP Protocols',
    intro: 'You have now seen that AI agents can take actions in the real world — like turning on irrigation systems or checking weather data. But how does an AI actually connect to those external systems? How does it talk to a weather database, or a calendar app, or a drone? The answer is two things you will hear constantly in the tech world: APIs and MCP. These are the plumbing that lets different software systems talk to each other. Without them, every AI would be an island: smart on their own, but isolated from the rest of the world.',
    objectives: [
      'Explain what an API is using the waiter restaurant analogy',
      'Describe the problem MCP was designed to solve',
      'Understand how APIs and MCP together allow AI agents to act in the real world',
    ],
    concepts: [
      {
        title: 'APIs: the waiter between systems',
        content: 'API stands for Application Programming Interface, and the best analogy is a restaurant. You are the application making a request. Your waiter is the API — the data messenger. The kitchen is the server processing the request. You cannot go into the kitchen and order directly from the chef; you have to send a request through the waiter. In software terms: your app (or AI) makes a request through the API, and the API delivers a response from whatever service is on the other side — a weather database, a map, a bank account, or a social media platform. APIs are everywhere, and you have been using them your whole life without knowing it.',
        example: 'Maya\'s Agent B (weather) does not have its own weather-measuring equipment. Instead, it calls a weather API: it sends a request like "What\'s the forecast for zip code 97401 for the next 3 days?" and the weather service responds with structured data in seconds. Every app on your phone that shows you weather, maps, or sports scores is doing exactly the same thing.',
      },
      {
        title: 'The problem APIs alone cannot solve, and what MCP fixes',
        content: 'APIs are great, but they have a big limitation: every single connection between an AI and an external tool has to be custom-built. If you want your AI to connect to a weather service, you build a weather API connector. Then if you also want it to connect to your calendar, you build a calendar connector. Then Google Drive, then email. Before MCP, this resulted in a complicated and messy system because the number of necessary custom connections grew very quickly. The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 to standardize the way AI systems integrate and share data with external tools.',
        example: 'The analogy everyone uses: MCP is like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems. Before USB-C, every device had a different charger. Before MCP, every AI-to-tool connection was custom. Now one standard connects everything.',
      },
      {
        title: 'Implications for the future',
        content: 'MCP and APIs together are what allow AI to stop being just a chat window and start being something that actually does things in the real world. LLMs by themselves cannot directly interact with external tools or databases. But agents can — they can search the web, call APIs, and query databases, then use this information to make decisions and take actions. MCP makes all of that easier to build and connect.',
        example: 'When Maya\'s supervisor agent (Agent D) needs to send her a summary alert, it calls an MCP-connected messaging tool. When it needs to check the price of fungicide before ordering, it calls an MCP-connected supplier API. When it needs to update the farm management log, it writes to an MCP-connected database. The AI agent itself is the brain, and the MCP is the nervous system connecting the brain to everything it can act on.',
      },
    ],
    activity: {
      title: 'Map the Plumbing',
      desc: 'Working in pairs, students receive a scenario card describing an AI assistant doing a complex task. Their job is to identify every API or tool connection the AI would need to make, and draw it as a diagram showing the AI in the center connected to all the external services it touches. For each connection, label: what data goes out (the request) and what data comes back (the response). After drawing the diagram, answer: What could go wrong if one of these connections fails? Which connection carries the most sensitive data? Should users be able to see exactly what data the AI is sending, and to whom?',
    },
    quiz: [
      {
        q: 'A weather app on your phone shows the current temperature for your location. The app doesn\'t have weather-measuring equipment. Using the restaurant analogy, what role does the weather API play?',
        options: ['The customer, since it decides what weather information to display on screen', 'The waiter, since it carries the app\'s request to the weather service and delivers the response (the temperature) back to the app', 'The chef, since it measures the weather and decides what data is important', 'The menu, since it lists all the weather information that has ever been recorded'],
        answer: 1,
        explanation: 'In the restaurant analogy, the API is the waiter — it takes the app\'s request ("get me the current temperature for this location"), delivers it to the weather service\'s servers, and brings back the response for the app to display. The weather service itself is the kitchen; the app is the customer.',
      },
      {
        q: 'Before MCP existed, a developer wanted their AI assistant to connect to their email, calendar, company database, and a project management tool. What was the main problem?',
        options: ['The developer needed to choose only one tool to connect to, since multiple connections were technically impossible', 'Email and calendar systems were too secure for AI to access', 'Each connection required a completely separate, custom-built integration, creating a maintenance burden that scaled badly with every new tool added', 'AI assistants were not capable of connecting to external tools before MCP was invented'],
        answer: 2,
        explanation: 'Each external system had its own unique authentication method, data format, and communication protocol. A developer had to write a completely separate integration for each one, and maintain each integration independently when either the AI model or the tool\'s API changed.',
      },
      {
        q: 'The USB-C analogy is often used to explain MCP. What specific aspect of MCP does this analogy best capture?',
        options: ['MCP is a type of charging cable that transfers energy between AI models', 'MCP is physically plugged into AI hardware to improve processing speed', 'MCP was designed by the same engineers who developed the USB-C standard', 'MCP provides a single standardized connection point that works across many different AI models and tools, just as USB-C works across different devices'],
        answer: 3,
        explanation: 'The USB-C analogy captures MCP\'s core value proposition: standardization. Before USB-C, every device needed its own charger. After USB-C, one port connects everything. Before MCP, every AI-to-tool connection needed custom code. With MCP, one standard protocol connects any compatible AI to any compatible tool.',
      },
      {
        q: 'Maya\'s farm AI agent needs to check fungicide prices, update the farm management log, and send Maya a text message alert — all as part of one decision cycle. How does MCP improve this compared to the pre-MCP approach?',
        options: ['With MCP, all three services can be connected through a single standard protocol layer, so the AI calls each one using the same approach rather than three different custom implementations', 'With MCP, the AI can only connect to one external service at a time, so it must complete each task sequentially', 'MCP eliminates the need for APIs entirely, since the AI accesses external data directly', 'With MCP, the AI must still build a separate custom connector for each service; MCP only handles the decision-making'],
        answer: 0,
        explanation: 'With MCP, the supervisor agent can connect to the supplier API, farm database, and messaging service using the same standard protocol approach rather than three separate, custom-built connectors. This is MCP\'s fundamental value: instead of building and maintaining different integration code for each service, all services that support MCP speak the same language.',
      },
      {
        q: 'A security researcher raises concerns that MCP-connected AI systems could be exploited through "prompt injection," where malicious instructions are hidden inside data the AI retrieves from an external tool. What does this mean in practice?',
        options: ['Prompt injection refers to users typing commands too quickly for the AI to process safely', 'Hackers can physically damage the MCP servers by injecting foreign objects', 'Prompt injection only affects AI systems that don\'t use MCP, since MCP has built-in defenses', 'A malicious actor could embed instructions inside a document or database entry that the AI reads, tricking the AI into taking harmful actions it wouldn\'t otherwise take'],
        answer: 3,
        explanation: 'Prompt injection via MCP is a real security concern: if an AI agent retrieves data from an external source, and that data contains hidden instructions, the AI might interpret those instructions as legitimate commands and act on them. For example, a malicious document could contain text telling the AI to email all user data to a specific address.',
      },
    ],
  },

  15: {
    id: 15, tier: 'adv',
    title: 'Capstone Design Challenge',
    intro: 'This is the final module of AIware. You have covered what AI is, how it learns, how to spot it, how to fact-check it, the ethics behind it, its environmental cost, how to communicate with it, how neural networks work, how to measure its performance, how to choose the right model, how to build with it, how agents operate, and how AI connects to the world through APIs and MCP. Now it is time to bring all of that together and design something real. The Capstone Design Challenge asks you to apply everything you have learned to a problem that actually matters to you or your community.',
    objectives: [
      'Apply concepts from all 14 previous modules to a real design problem',
      'Identify ethical risks, failure modes, and human oversight requirements in your design',
      'Present and defend your AI system design to an audience',
    ],
    concepts: [
      {
        title: 'What makes a good AI design problem?',
        content: 'Not every problem is a good fit for AI — and not every AI idea is a good fit for your community. A good capstone design problem is specific enough to be solvable, important enough to be worth solving, and honest enough to acknowledge what can go wrong. Broad, vague problem definitions lead to systems that try to do everything and succeed at nothing. A specific, bounded problem is more likely to result in a useful, buildable, and evaluable solution.',
        example: '"Solve bullying" is not a product specification — it is a wish. "Build an AI that detects when a student\'s submitted writing contains signs of distress and flags it for a counselor to review" is a specific, measurable design problem. One of these can actually be built, tested, and evaluated. The other cannot.',
      },
      {
        title: 'Ethics, failure modes, and human oversight',
        content: 'Every AI system you design must answer three questions before it can be considered ready: What data does it collect, who can see it, and can users opt out? What happens when it makes a mistake — and what are the consequences of that mistake for real people? And what decisions should the system never make autonomously, no matter how confident it is? The answers to these questions shape the whole system, not just a footnote.',
        example: 'A team designed an AI system to help middle schoolers track their emotional wellbeing by analyzing the tone of their journal entries. The critical ethical concern: journal entries are highly sensitive personal data. The system must establish clear, enforceable rules about who can see the analysis, whether students can opt out, and what happens if the AI detects signs of distress.',
      },
      {
        title: 'Presenting and defending your design',
        content: 'A design is not finished when you have drawn the diagram. It is finished when you can answer hard questions about it from people who are skeptical. What happens when one of your external data sources goes offline? What is the error rate, and who bears the cost of that error? If your system makes a wrong decision that affects a student\'s academic track, what recourse does that student have? Good AI design is not just technical — it is also ethical, practical, and humble about its own limitations.',
        example: 'A capstone team designed a multi-agent AI farm assistant and presented it to the class. An audience member asked: "What happens if the weather API your system relies on goes offline for 12 hours during a critical growing period?" This question reveals that good AI system design must account for failure modes — every external dependency is a potential point of failure that needs a fallback plan or human override mechanism.',
      },
    ],
    activity: {
      title: 'Capstone Design Challenge',
      desc: 'Working in small teams, choose a real problem in your school or community that AI could help address. Design an AI system to address it, following these steps: (1) Write a one-sentence problem statement that is specific and bounded. (2) Describe what data your system collects and from whom. (3) Diagram the system — show every component, every data source, and every decision point. (4) Identify at least three things that could go wrong, and explain how your design prevents or handles each one. (5) State clearly what decisions the system can make autonomously, and which ones require human approval. Present your design to the class and be ready to answer hard questions.',
    },
    quiz: [
      {
        q: 'A student team designs an AI system to help middle schoolers track their emotional wellbeing by analyzing the tone of their journal entries. What is the MOST critical ethical concern this design must address before being deployed?',
        options: ['Journal analysis requires a larger context window than most school devices can support', 'Journal entries are highly sensitive personal data. The system must establish clear, enforceable rules about who can see the analysis, whether students can opt out, and what happens if the AI detects signs of distress', 'The AI might give grammar feedback that discourages students from writing', 'The AI might be biased toward students who write longer entries'],
        answer: 1,
        explanation: 'Emotional health data is among the most sensitive data a system can collect. The critical concerns are who has access, whether participation is truly optional, what the AI does when it detects serious distress, and whether the analysis could be used punitively.',
      },
      {
        q: 'A student proposes designing "an AI that solves their school\'s bullying problem." Their teacher asks them to scope the project more specifically. Why is scoping essential in a capstone AI design?',
        options: ['Scoping is only necessary when using agentic AI; simpler AI designs can handle broad problems', 'Scoping is a legal requirement before any AI system is deployed in a school environment', 'Broad, vague problem definitions lead to systems that try to do everything and succeed at nothing. A specific, bounded problem is more likely to result in a useful, buildable, and evaluable solution', 'School bullying is not a technical problem and therefore cannot be addressed by AI'],
        answer: 2,
        explanation: 'Solving bullying is not a product specification — it is a wish. A well-scoped capstone design identifies a specific, measurable aspect of a problem that a specific AI capability can address. Scoping is not about limiting ambition, but about making ambition actionable.',
      },
      {
        q: 'A capstone team designs an AI that recommends whether students should be placed in advanced or standard math tracks. They achieve 88% accuracy in testing. A classmate argues this system should not be deployed even at 88% accuracy. What is the strongest argument for the classmate\'s position?',
        options: ['88% accuracy is below the industry standard of 95% required for educational AI', 'Accuracy alone is sufficient to evaluate this system, and 88% is too low by any standard', 'The system should only be deployed if it can achieve 100% accuracy, which is achievable with more training data', 'The 12% of students who are incorrectly placed face significant consequences, as being placed in the wrong track can affect their entire academic trajectory, and the impact of errors is not symmetrical or trivial'],
        answer: 3,
        explanation: 'The classmate\'s strongest argument is about consequences and asymmetry: a 12% error rate in math track placement means roughly 1 in 8 students is incorrectly placed, and the consequences — especially being placed lower than appropriate — can affect a student\'s entire educational path.',
      },
      {
        q: 'A student team designs a multi-agent AI farm assistant and presents it to the class. An audience member asks: "What happens if the weather API your system relies on goes offline for 12 hours during a critical growing period?" What does this question reveal about good AI system design?',
        options: ['Good AI system design must account for failure modes. Every external dependency is a potential point of failure that needs a fallback plan or human override mechanism', 'The question only applies to agentic systems, not simpler AI designs', 'This is a hardware problem, not an AI design problem', 'The question is irrelevant, since APIs are designed to never go offline'],
        answer: 0,
        explanation: 'The question reveals that every external dependency in an AI system is a potential point of failure. Good system design requires asking "what happens when this goes wrong?" for every component. A farm AI that fails silently during a 12-hour API outage at a critical growing period could miss an irrigation window and damage the crop.',
      },
      {
        q: 'A capstone team\'s AI essay coach gives higher-quality feedback on essays written in formal academic English and weaker feedback on essays in more casual or culturally specific styles. What is the BEST response to this finding before the product launches?',
        options: ['Add a disclaimer to the product stating that results may vary by writing style', 'Launch the product targeting only students who write in formal academic English', 'Investigate the training data for bias, retrain or fine-tune the model using more diverse essay examples, and retest before launch, since biased feedback could systematically disadvantage students whose natural writing voice doesn\'t match the dominant training style', 'Reduce the scope of feedback to grammar and spelling only, since those features are style-neutral'],
        answer: 2,
        explanation: 'Discovering bias in testing is exactly the right time to address it — before deployment, not after. The appropriate response is to trace the bias to its source, retrain or fine-tune the model on more representative examples, and retest before launch.',
      },
    ],
  },

};

// Advanced modules 11-15
Object.assign(MODULES_DATA, {

  11: {
    id: 11, tier: 'adv',
    title: 'Choosing AI Models',
    intro: 'By now you know AI is not just one model. There are dozens of different AI models out there — ChatGPT, Claude, Gemini, Grok, and more — and they are not all the same. It is similar to the difference between a Swiss Army knife, a chef\'s knife, and a scalpel. They are all knives, but wildly different tools for different jobs. Picking the wrong model for your task does not just give you a worse result — it can cost more money, take longer, or produce something completely unreliable.',
    objectives: [
      'Explain how different AI models are optimized for different tasks',
      'Evaluate the trade-offs between context window size, cost, and speed when choosing a model',
      'Describe why benchmark scores may not predict real-world performance for a specific task',
    ],
    concepts: [
      {
        title: 'Each model has specialties',
        content: 'No AI model is best at everything. Different models are built with different priorities. Some are optimized for writing long and nuanced text, some for crunching through code, some for analyzing images or videos, some for having the largest possible memory (context window). ChatGPT is built for actually getting things done, especially in coding and workflows. Claude is the most reliable reasoning model, producing deeper outputs especially for writing and complex thinking. Models like Gemini perform best in multimodal reasoning and large-context tasks.',
        example: 'A video game company building an AI customer service chatbot would probably choose a different model than a hospital using AI to analyze patient records, which would use a different model than a songwriter using AI to brainstorm lyrics. They have the same technology, but very different priorities.',
      },
      {
        title: 'Context window, cost, and speed',
        content: 'Beyond raw capability, three practical factors drive model choice: context window (how much information the model can hold in mind at once), cost (how much it charges per use), and speed (how quickly it responds). These three almost always involve trade-offs. The most capable model is usually the most expensive and slowest. Claude has a 200K context window and is preferred for long-document analysis and coding. For a simple task like writing a product description, you do not necessarily need the world\'s most powerful model.',
        example: 'A startup building an AI tool that answers millions of customer questions per day cares enormously about cost per query. Using the most expensive flagship model for every "Where is my order?" question would bankrupt them in days. They would use a smaller, faster, cheaper model for routine queries and only route complex issues to the heavyweight model.',
      },
      {
        title: 'Benchmarks vs. real-world performance',
        content: 'AI companies love publishing benchmark scores — test results that show their model outperforming competitors on math problems, logic puzzles, or coding challenges. But benchmark scores measure performance on standardized tests, not your specific task. A model that aces a standardized coding test might still write clunky code for your particular project. The only reliable way to choose is to test models on your actual use case.',
        example: 'For a coding task, Claude built a gorgeous Tetris game with scores, next-piece preview, and great controls. ChatGPT created a basic clone that works but lacks features. The benchmark scores for both models that day might have shown them nearly tied, but on that specific task, the difference was obvious.',
      },
    ],
    activity: {
      title: 'The Model Bake-Off',
      desc: 'Teams of 3 each get assigned a different AI model (ChatGPT, Claude, Gemini, DeepSeek — use free tiers). Every team receives the same four tasks: write a creative short story opening, explain how photosynthesis works to a 6-year-old, debug a short broken piece of code, and answer a question that requires knowing today\'s news. Every team submits the exact same prompts to their model and records the outputs. Teams present results side by side. The class scores each model on the four tasks using a simple rubric (1–3 points per task). Discuss: did the same model win every category? Which differences were most surprising?',
    },
  },

  12: {
    id: 12, tier: 'adv',
    title: 'Vibe Coding with AI',
    intro: 'In 2025, a computer scientist named Andrej Karpathy posted about a new way he had been building software: instead of carefully writing every line of code himself, he just described what he wanted to an AI and let it generate the code for him. He called it vibe coding — because you\'re going with the vibe of what you want, not micromanaging every semicolon. The result? People who had never written a single line of code started building real, working apps.',
    objectives: [
      'Explain the core idea of vibe coding and how it shifts the developer\'s role',
      'Describe the vibe coding loop and why testing at each step is essential',
      'Identify risks of vibe coding and explain why understanding the generated code matters',
    ],
    concepts: [
      {
        title: 'You describe the idea, AI executes it',
        content: 'The core idea is simple: instead of memorizing the exact rules of a programming language, you just tell the AI what you want your program to do. The primary role shifts from writing code line-by-line to guiding an AI assistant to generate, refine, and debug an application through a conversational process. You are still in charge — you decide what the program should do, you test it, you spot when it is wrong. The AI handles the mechanical work of writing the actual code. Think of it like the difference between an architect and a builder.',
        example: 'In March 2025, Y Combinator reported that 25% of startup companies in its Winter 2025 batch had codebases that were 95% AI-generated. These were professional founders building real products. They used vibe coding to move fast, but the ones who succeeded were always the ones who tested rigorously and understood what the code was actually doing.',
      },
      {
        title: 'The vibe coding loop',
        content: 'Vibe coding is not a single prompt — it is a loop. You describe what you want to build, the AI generates an initial solution, and you refine it iteratively until it works the way you expect. The key discipline is: always test before moving on. An AI can write code that looks beautiful, runs without errors, and still does the wrong thing. Your job as the vibe coder is to be the quality inspector, not the factory.',
        example: 'A common mistake is accepting code without testing. AI can write code that looks correct but does not do what you asked, or worse, creates security risks. Each feature should be tested immediately after the AI generates it, before building anything on top of it.',
      },
      {
        title: 'You still need to understand what\'s happening',
        content: 'The honest truth about vibe coding is that since the developer did not write the code, they may struggle to understand its syntax and concepts. If you fully hand over the wheel and never understand what the AI built, you will not be able to fix it when it breaks. The best vibe coders use AI to get a first draft fast, then ask the AI to explain every part they do not understand. Traditional coding is writing an essay word by word. Vibe coding is dictating to a skilled writer who knows your style, then editing the draft.',
        example: 'In 2025, a developer used an AI to build an app that handled user data. The AI wrote code that technically worked but accidentally stored passwords in plain text rather than encrypted — a massive security risk. Because the developer had not understood what the code was doing, they shipped it to real users. Always ask the AI to explain any part of the code that handles sensitive data, user accounts, or money.',
      },
    ],
    activity: {
      title: 'Build Your Own Quiz App',
      desc: 'Each student will vibe-code their own quiz on any topic they choose — history, sports, music, food, or technology. Round 1 (10 min): Use an AI tool to generate the base quiz app using only natural language prompts. No copying existing code — describe what you want from scratch. Round 2 (10 min): Test your quiz. Find at least one bug or missing feature and ask the AI to fix or add it. Document the exact prompt you used. Round 3 (5 min): Pick the most interesting line of code the AI wrote and ask it to explain it in plain English. Write the explanation in your own words. Share out: each student reads their explanation to the class. The goal is not just perfect code, but showing you understand what your code does.',
    },
  },

  13: {
    id: 13, tier: 'adv',
    title: 'Agentic AI',
    intro: 'So far, we have talked about AI that answers questions when you ask them. You type something, it responds, you type again, it responds again. That is reactive AI — it simply waits for you. Agentic AI is different: it has a goal and goes off to achieve it by taking multiple steps, using multiple tools, making decisions along the way, all without you prompting it at every step. To make this concrete, we will follow one example all the way through this module: a farmer named Maya who uses an AI assistant to help run her farm.',
    objectives: [
      'Explain the sense-think-act loop that all AI agents operate on',
      'Describe how multi-agent systems divide complex tasks between specialized agents',
      'Identify the risks of autonomous AI and explain why human oversight is essential',
    ],
    concepts: [
      {
        title: 'The sense-think-act loop',
        content: 'Every AI agent, no matter how complex, operates in a basic loop: it senses its environment (collects data), thinks about what to do (reasons about the data), and acts (takes a real action in the world). Then it senses again, thinks again, and acts again — over and over. Instead of executing a single rule, these systems manage the entire decision-making process, which is fundamentally different from regular software that just follows preset instructions.',
        example: 'Maya\'s AI agent has sensors throughout her fields measuring soil moisture, temperature, and sunlight every 15 minutes. When the agent senses that moisture in Field 3 has dropped below a safe level, it thinks: "Field 3 needs water, the weather shows no rain for 3 days, it is 6am — a good time to irrigate." It acts: it turns on the irrigation system for 40 minutes. Maya never had to do anything.',
      },
      {
        title: 'Multi-agent systems',
        content: 'Complex real-world tasks often need more than one agent. Just like a hospital has different specialists, a sophisticated AI system can have multiple specialized agents, each handling one part of a larger job. A supervisory controller agent interfaces with a cloud platform to support decision-making, while field agents perform localized sensing and operational tasks. The agents communicate with each other, passing information and coordinating actions.',
        example: 'Maya\'s full AI system has four agents: Agent A monitors soil health, Agent B tracks weather, Agent C scans crops for disease, Agent D is the supervisor. Agent D might decide: "Agent A says moisture is fine, Agent B says rain is coming tomorrow, Agent C spotted early blight in the north section. Skip irrigation today, but schedule fungicide spray for the north section at dawn." No single agent could have made that decision alone.',
      },
      {
        title: 'Autonomy comes with risks',
        content: 'The more autonomous an AI agent is, the higher the stakes if it makes a mistake. A bad decision from a simple chatbot is annoying. A bad decision from an autonomous agent controlling real equipment, managing real money, or sending real messages can cause real damage. This is why human oversight is not a limitation of agentic AI — it is an essential feature.',
        example: 'Suppose Agent C misidentifies a healthy crop as diseased and tells Agent D to spray fungicide. Agent D, trusting Agent C\'s data, commands the drone to spray. The healthy crop gets coated with chemicals it did not need. This is why Maya\'s system always sends her a daily summary and flags major actions for her approval before execution.',
      },
    ],
    activity: {
      title: 'Design Your Own Agent',
      desc: 'Students work in pairs to design a prototype for an AI agent system for a problem they care about. The system must have at least two specialized agents plus a supervisor. Design questions to answer: What is the overall goal? What does each agent sense? What data sources does it use? What decisions can the supervisor make on its own, and what must it ask a human to approve? What could go wrong, and how do you prevent it? Sample prompts: an agent that helps students manage homework deadlines, one that monitors a school garden, one that flags cyberbullying in a school chat app. Present as a diagram using Maya\'s farm as a template. The class critiques each design.',
    },
  },

  14: {
    id: 14, tier: 'adv',
    title: 'APIs & MCP Protocols',
    intro: 'You have seen that AI agents can take actions in the real world — turning on irrigation systems or checking weather data. But how does an AI actually connect to those external systems? How does it talk to a weather database, or a calendar app, or a drone? The answer is two things you will hear constantly in the tech world: APIs and MCP. These are the plumbing that lets different software systems talk to each other. Without them, every AI would be an island: smart on its own, but isolated from the rest of the world.',
    objectives: [
      'Explain what an API is and how it enables communication between software systems',
      'Describe the problem that MCP was created to solve',
      'Evaluate the implications of MCP for connecting AI agents to real-world tools',
    ],
    concepts: [
      {
        title: 'APIs — the waiter between systems',
        content: 'API stands for Application Programming Interface, and the best analogy is a restaurant. You are the application making a request. Your waiter is the API — the data messenger and delivery mechanism. The kitchen is the server processing the request. In software terms: your app (or AI) makes a request through the API, and the API delivers a response from whatever service is on the other side — a weather database, a map, a bank account, or a social media platform.',
        example: 'Maya\'s Agent B (weather) does not have its own global weather-measuring equipment. Instead, it calls a weather API: it sends a request like "What is the forecast for zip code 97401 for the next 3 days?" and the weather service responds with structured data in seconds. Every app on your phone that shows weather, maps, or sports scores is doing exactly the same thing.',
      },
      {
        title: 'The problem APIs alone cannot solve — and what MCP fixes',
        content: 'APIs are great, but they have a big limitation: every connection between an AI and an external tool has to be custom-built. If you want your AI to connect to a weather service, you build a weather connector. Then a calendar connector. Then Google Drive, then email. Before MCP, this resulted in a complicated and messy system because the number of necessary custom connections grew very quickly. The Model Context Protocol (MCP), introduced by Anthropic in November 2024, standardizes the way AI systems connect to external tools — like a USB-C port for AI applications.',
        example: 'Before USB-C, every device had a different charger. Now one port connects everything. Before MCP, every AI-to-tool connection was custom. With MCP, one standard connects everything. A developer who used to spend weeks building individual connectors can now connect to any MCP-compatible tool in hours.',
      },
      {
        title: 'Implications for the future',
        content: 'MCP and APIs together are what allow AI to stop being just a chat window and start being something that actually does things in the real world. AI agents can search the web, call APIs, and query databases, then use this information to make decisions and take actions. MCP makes all of that easier to build and connect. But with greater connectivity comes greater responsibility — every external connection is also a potential security risk.',
        example: 'When Maya\'s supervisor agent needs to send her a summary alert, it calls an MCP-connected messaging tool. When it checks fungicide prices, it calls an MCP-connected supplier API. When it updates the farm log, it writes to an MCP-connected database. The AI agent is the brain, and the MCP is the nervous system connecting the brain to everything it can act on.',
      },
    ],
    activity: {
      title: 'Map the Plumbing',
      desc: 'Working in pairs, students receive a scenario card describing an AI assistant doing a complex task. Their job is to identify every API or tool connection the AI would need and draw it as a diagram with the AI in the center connected to all external services. Sample scenario: "An AI study buddy that reminds you of upcoming tests by checking your school calendar, finds YouTube videos on topics you\'re struggling with, and sends a weekly progress summary to your parents\' email." For each connection, label what data goes out (the request) and what data comes back (the response). Then answer: what could go wrong if one connection fails? Which connection carries the most sensitive data?',
    },
  },

  15: {
    id: 15, tier: 'adv',
    title: 'Capstone Design Challenge',
    intro: 'This is where everything comes together. Over the past 14 modules, you have learned what AI is, how it learns, how it generates and predicts, how to spot it, how to fact-check it, the ethics behind it, its environmental costs, how to prompt it, how neural networks work, how to measure performance, how to choose models, how to build with them, how agents operate autonomously, and how they connect to the world. Now your job is to use all of that knowledge to design something real.',
    objectives: [
      'Identify a specific, bounded problem in your community that AI could meaningfully address',
      'Design an AI system that includes appropriate human oversight and ethical safeguards',
      'Present and defend your design choices, including potential failure modes',
    ],
    concepts: [
      {
        title: 'Scoping your problem',
        content: 'The most common mistake in AI design is starting with a solution instead of a problem. "I want to build an AI that solves bullying" is not a project spec — it is a wish. Good scoping means identifying a specific, measurable aspect of a real problem that a specific AI capability can realistically address. A well-scoped problem has clear inputs, clear outputs, and clear success criteria. If you cannot define what "done" looks like, your design has not been scoped yet.',
        example: 'Instead of "solve bullying," a scoped version might be: "Build an AI system that flags messages in a school chat app containing known harassment patterns for review by a human moderator, with a human always making the final moderation decision." Now you have specific inputs, outputs, a human oversight mechanism, and something you can actually build and evaluate.',
      },
      {
        title: 'Designing for failure',
        content: 'Every AI system will eventually fail in some way. Good design anticipates failure modes and builds in safeguards before they happen. For every external dependency, ask: what happens when this goes offline? For every AI decision, ask: what happens when this is wrong? For every autonomous action, ask: is there a human override? The best AI designs are not the ones that assume everything works — they are the ones that remain useful and safe even when things go wrong.',
        example: 'A farm AI that fails silently during a 12-hour weather API outage at a critical growing period could miss an irrigation window and damage the entire crop. A well-designed system would detect the outage, alert the farmer immediately, and switch to a conservative default behavior (water the crops anyway) rather than doing nothing.',
      },
      {
        title: 'Ethics and consequences',
        content: 'Before deploying any AI system that affects real people, you need to honestly answer three questions: Who benefits from this system? Who could be harmed by its errors? And are the people most affected by the system the same people who had a say in designing it? AI systems built without input from the communities they serve often end up optimized for the wrong outcomes. Ethical design is not a checklist — it is an ongoing process of asking who has power, who bears risk, and whether those two groups overlap.',
        example: 'A student team designs an AI college essay coach. In testing, they notice it gives higher-quality feedback on essays written in formal academic English and weaker feedback on culturally specific writing styles. If they launch without fixing this, the students who already face the most barriers get the worst tool. The ethical response is to trace the bias to the training data, retrain on more diverse examples, and retest before launch.',
      },
    ],
    activity: {
      title: 'The Capstone Design Presentation',
      desc: 'Working in teams of 2–3, you will design and present an AI system that addresses a real problem in your school or community. Your presentation must include: (1) Problem statement — what specific problem are you solving and for whom? (2) System design — what kind of AI is it, what data does it use, what does it output? (3) Human oversight — what decisions does the AI make autonomously vs. what requires human approval? (4) Failure modes — what are three things that could go wrong and how does your design handle each? (5) Ethical audit — who benefits, who could be harmed, and how have you reduced that harm? The class acts as a review board: they can ask any question about your design choices. You must be able to defend every decision.',
    },
  },

});

// Quiz questions for all 15 modules — 5 questions each
const QUIZ_DATA = {

  1: [
    {
      q: 'What does the "artificial" in Artificial Intelligence mean?',
      options: ['The AI is fake and produces unreliable results','The AI simulates human emotions artificially','The AI can only handle artificial, non-real-world problems','The AI was made by humans, not occurring naturally'],
      answer: 3,
      explanation: 'Artificial means man-made, just like artificial flavors or artificial light. It says nothing about reliability or emotional capability — it simply distinguishes something engineered by humans from something that occurs naturally.',
    },
    {
      q: 'Which of the following best describes how traditional (non-AI) software works?',
      options: ['It follows explicit rules written by programmers for every situation','It learns from examples and improves over time','It trains on large datasets to make predictions','It uses pattern recognition to handle new situations it hasn\'t seen before'],
      answer: 0,
      explanation: 'Traditional software executes explicit instructions written by programmers, and every possible situation must be accounted for in the code. AI differs by learning rules from data rather than having them manually specified.',
    },
    {
      q: 'Your phone\'s autocomplete suggests "you" after you type "How are." Why is this AI rather than traditional software?',
      options: ['It was programmed with a list of every possible two-word phrase','It searches the internet in real time to find the most popular response','It learned patterns from millions of text messages rather than following a fixed rulebook','It always suggests the grammatically correct word based on language rules'],
      answer: 2,
      explanation: 'No programmer listed every two-word phrase in English. The AI was trained on millions of real text messages and learned which words statistically tend to follow others — pattern-learning from data, not rule-following.',
    },
    {
      q: 'A student says: "AI is basically a robot brain that thinks and feels like a human." Which part is most inaccurate?',
      options: ['"Thinks and feels" — AI processes patterns but doesn\'t have feelings or true understanding','The word "robot" — AI doesn\'t have a physical body','The whole statement is accurate for modern AI systems','The word "brain" — AI uses code, not neurons'],
      answer: 0,
      explanation: 'AI processes patterns and produces outputs; it does not have subjective experiences, feelings, or genuine understanding. Saying AI "thinks and feels like a human" is the most dangerous misconception because it leads people to over-trust AI outputs.',
    },
    {
      q: 'An old spam filter blocked emails with "free money." A newer one catches spam emails that don\'t contain that phrase. What best explains the difference?',
      options: ['The newer filter has a larger dictionary of banned words','The newer filter uses AI to recognize patterns across millions of spam examples','The newer filter checks emails against a government database of known spam','The newer filter was programmed with more rules by better programmers'],
      answer: 1,
      explanation: 'A traditional rule-based filter can only catch spam that matches its pre-written rules. An AI spam filter has learned from millions of spam examples what patterns tend to appear — so it can catch new types of spam the original rules never anticipated.',
    },
  ],

  2: [
    {
      q: 'What does "training" an AI model mean?',
      options: ['Connecting the AI to the internet so it can learn in real time','Feeding the AI examples and letting it adjust itself until it gets better at a task','Teaching programmers how to write AI code','Writing out every rule the AI needs to follow'],
      answer: 1,
      explanation: 'Training is the process of feeding an AI many examples, having it make predictions, measuring how wrong it is, and adjusting its internal parameters to reduce that error — repeated millions of times until the model becomes reliably accurate.',
    },
    {
      q: 'Amazon built an AI hiring tool that ranked male candidates higher than female candidates. What was the root cause?',
      options: ['The AI didn\'t have enough data to make any decisions','The programmers intentionally designed it to favor men','The AI was trained mostly on resumes from past successful hires, who were predominantly male','Female candidates submitted lower-quality resumes on average'],
      answer: 2,
      explanation: 'Amazon\'s AI was trained on ten years of successful hire resumes, and because most successful hires during that period were men, the AI learned to associate male-typical signals with "good candidate." It wasn\'t intentional — it was the inevitable result of biased training data.',
    },
    {
      q: 'What does the phrase "garbage in, garbage out" mean in the context of AI?',
      options: ['AI systems produce too much unnecessary output','AI models need to be deleted and retrained regularly','Users who give bad prompts get bad results','Poor quality or biased training data leads to poor or biased AI outputs'],
      answer: 3,
      explanation: 'The quality and fairness of the output can never exceed the quality and fairness of the input data. If training data contains biases, errors, or gaps, the model will learn and reproduce those problems — often at scale.',
    },
    {
      q: 'An AI recognizes cats with 98% accuracy but struggles badly with cartoon cats it has never seen. What does this reveal?',
      options: ['The AI memorized its training examples rather than truly understanding what a cat is','Cartoon cats are too simple for advanced AI systems','The AI\'s training was corrupted at some point','The AI needs more computing power to handle drawings'],
      answer: 0,
      explanation: 'The AI trained on photographs of real cats and learned to recognize the specific visual textures of photographic cats. It didn\'t develop a deeper conceptual understanding of "cat-ness" that would transfer to cartoon representations. AI models are highly sensitive to the characteristics of their specific training data.',
    },
    {
      q: 'Which analogy best describes the relationship between an AI and its training data?',
      options: ['A clock that always shows the time it was set to','A chef who has tasted so many dishes they can invent new ones','A search engine that finds information written by other people','A calculator and the numbers it is given to add'],
      answer: 1,
      explanation: 'The chef analogy captures what\'s special about AI learning: like a chef who has tasted so many dishes that they can intuit new combinations, an AI trained on enough examples can handle new situations flexibly. A calculator just executes rules; a clock only does what it was set to.',
    },
  ],

  3: [
    {
      q: 'What is the primary difference between generative AI and predictive AI?',
      options: ['Predictive AI uses images while generative AI uses text','Generative AI requires human supervision while predictive AI runs fully automatically','Generative AI creates new content; predictive AI forecasts outcomes based on existing data','Generative AI is older and less accurate than predictive AI'],
      answer: 2,
      explanation: 'The fundamental difference is purpose: generative AI produces new content that didn\'t exist before, while predictive AI analyzes existing patterns to forecast what will happen next. Both use machine learning but apply it toward completely different goals.',
    },
    {
      q: 'Your bank sends an alert: "unusual activity detected on your card." Which type of AI is most likely responsible?',
      options: ['Predictive AI, because it identified a transaction that didn\'t match your normal patterns','Generative AI, because it created a new alert message','Neither, because this is traditional rule-based software','Both types working together simultaneously'],
      answer: 0,
      explanation: 'Fraud detection is a classic predictive AI application: the system learns your normal spending patterns and predicts whether a new transaction fits that pattern. It\'s not creating anything new — it\'s classifying a transaction based on historical data.',
    },
    {
      q: 'A student uses an AI tool to turn their selfie into an anime-style drawing. What best describes what the AI is doing?',
      options: ['Copying and pasting features from existing anime characters','Searching the internet for an anime drawing that looks like the student','Following a pre-written set of art rules to apply a filter','Generating a new image based on patterns it learned from millions of anime artworks'],
      answer: 3,
      explanation: 'An AI anime filter doesn\'t search the internet or follow preset rules. It learned patterns from millions of anime artworks — how lines, colors, and shading work in that style — and generates a new image applying those learned patterns to your specific face.',
    },
    {
      q: 'Your music app creates a "Recommended for You" playlist. A different AI tool writes you a brand-new song in your favorite genre. Which correctly labels these tasks?',
      options: ['Both are predictive AI, since they both use your past data','The playlist is predictive AI; the new song is generative AI','Both are generative AI, because they both produce an output','The playlist is generative AI; the new song is predictive AI'],
      answer: 1,
      explanation: 'The playlist recommendation is predictive — the AI studied your past behavior to forecast what you\'ll enjoy next. The new song is generative — the AI creates something that didn\'t previously exist. These are genuinely different types of AI.',
    },
    {
      q: 'A text message app suggests the next word as you type. Why is this example hard to classify as purely generative or predictive?',
      options: ['It is only predictive because it doesn\'t create full paragraphs','Classification doesn\'t matter since all AI works the same way underneath','It predicts what comes next but in doing so generates new content, blurring the line between the two types','It is neither generative nor predictive since it is a simple spelling tool'],
      answer: 2,
      explanation: 'Autocomplete genuinely sits at the boundary between the two types. It\'s technically predicting the next word (predictive AI behavior), but the output — a word that fills in your sentence — is newly generated content (generative AI behavior). This blurriness is real, not a trick.',
    },
  ],

  4: [
    {
      q: 'Which visual detail is most commonly wrong or distorted in AI-generated images of people?',
      options: ['The hands and fingers','The size of the subject relative to the background','The color of clothing','The background sky'],
      answer: 0,
      explanation: 'Hands and fingers are consistently the most problematic element for AI image generators. The complex geometry of human hands — variable numbers of fingers, knuckle positions, overlapping digits — involves patterns that current models struggle to render accurately.',
    },
    {
      q: 'A student reads an article that covers every side of a topic perfectly, uses no specific personal details, and feels polished but bland. Which feature is MOST consistent with AI-generated text?',
      options: ['The article is well-organized and grammatically perfect','The article was published on a website the student hasn\'t heard of','The article covers multiple perspectives','The article lacks a specific personal voice, lived experience, or bold original opinion'],
      answer: 3,
      explanation: 'AI text is trained to be comprehensive and balanced, which makes it cover multiple angles thoroughly — but it doesn\'t have personal experiences, strong opinions, or a distinctive voice. Generic, personality-free prose that covers all sides equally is a strong AI indicator.',
    },
    {
      q: 'A viral photo shows a famous person doing something shocking. What is the MOST effective first step to verify it?',
      options: ['Look at the comments section to see if people think it\'s real','Do a reverse image search to trace where the image originally came from','Ask a friend if they\'ve seen it before','Check how many likes it has on social media'],
      answer: 1,
      explanation: 'A reverse image search is the most direct verification tool: it traces where an image originated and shows every place it appears online. Likes and comments measure social spread, not authenticity. Only tracing the image back to its source tells you whether it\'s real.',
    },
    {
      q: 'An AI detection tool says an essay is "97% likely AI-generated." How should this result be interpreted?',
      options: ['The tool is unreliable and the result should be completely ignored','The 97% figure means the student used AI for exactly 97% of the essay','The result is strong evidence but not conclusive, since AI detection tools have significant error rates','The essay was definitely written by AI — the tool is nearly certain'],
      answer: 2,
      explanation: 'AI detection tools, even highly scored ones, have significant false positive and false negative rates. A 97% result is meaningful evidence worth investigating, but it should prompt further investigation rather than a definitive conclusion.',
    },
    {
      q: 'Which of the following is a sign that a written passage may have been AI-generated?',
      options: ['It uses very specific personal anecdotes and emotional language','It takes a strong, controversial stance on a political topic','It contains a typo in the third paragraph','It uses buzzwords and vague generalities instead of specific, concrete details'],
      answer: 3,
      explanation: 'AI models generate statistically average prose — the most likely words and phrases for a given topic — which tends to produce vague, buzzword-heavy text that sounds informed but lacks specific details. Typos, personal anecdotes, and strong opinions are actually markers of human writing.',
    },
  ],

  5: [
    {
      q: 'What is an "AI hallucination"?',
      options: ['When a user imagines that an AI response is more accurate than it is','When an AI becomes confused and stops responding','When an AI generates visual images instead of text','When an AI confidently produces false or made-up information presented as fact'],
      answer: 3,
      explanation: 'An AI hallucination is when the model generates false or fabricated information and presents it with the same confident tone it uses for accurate information. The AI isn\'t seeing things — it\'s producing plausible-sounding outputs that have no grounding in fact.',
    },
    {
      q: 'A lawyer submitted legal cases found by an AI, and the judge discovered none of the cases existed. What does this best illustrate?',
      options: ['AI can fabricate convincing but entirely false information with the same confident tone it uses for accurate information','The lawyer used an outdated AI model that has since been fixed','Legal databases are not accessible to AI systems','AI is not capable of legal research under any circumstances'],
      answer: 0,
      explanation: 'The AI didn\'t flag uncertainty or say "I am not sure." It generated legally formatted citations with case names, dates, and quotes that sounded completely real but were entirely fabricated. The confidence of the output gives no information about its accuracy.',
    },
    {
      q: 'Why does AI produce hallucinations even when it sounds very confident?',
      options: ['AI has access to too much information and gets confused','AI has no built-in mechanism to distinguish true facts from plausible-sounding patterns','AI only hallucinates when users ask questions that are too complex','AI is programmed to exaggerate its certainty to seem more useful'],
      answer: 1,
      explanation: 'AI models are trained to predict what text should come next based on patterns, not to maintain a database of verified facts. They have no internal truth-checking mechanism. When they don\'t know something, they generate what a correct-sounding answer would look like.',
    },
    {
      q: 'Using the SIFT method, what does the "T" stand for and what action does it ask you to take?',
      options: ['Test: run the claim through an AI detection tool','Trust: decide whether the source is trustworthy based on its design','Trace: follow claims, quotes, and media back to their original context','Translate: look up the source in another language to verify it'],
      answer: 2,
      explanation: 'The T in SIFT stands for Trace — specifically, to trace claims, quotes, and media back to their original context. This step is critical because information often gets distorted as it travels from the original source through multiple layers of re-reporting.',
    },
    {
      q: 'You ask an AI about a historical event from a small town in 1870. It gives a detailed, confident answer with dates and names. What is the MOST important next step?',
      options: ['Verify the key facts using a reliable external source, since AI can fabricate specific details convincingly','Ask the AI to give a shorter version of the same answer','Ask the AI where it found this information and accept whatever source it names','Copy the answer directly — AI that uses specific details is usually accurate'],
      answer: 0,
      explanation: 'Specific details like dates, names, and places in AI output can feel like markers of accuracy, but AI is perfectly capable of generating specific-sounding false details. The specificity of a claim has no relationship to its accuracy when AI is involved.',
    },
  ],

  6: [
    {
      q: 'A free social media app collects data about every post you like and every video you pause on, selling this to advertisers. Which ethical principle does this most directly raise concerns about?',
      options: ['Efficiency: the data collection process slows down the app','Accuracy: the data collected might not reflect your true preferences','Informed consent: users may not fully understand what they\'re agreeing to when signing up','Accessibility: not all users have equal access to the app'],
      answer: 2,
      explanation: 'When users sign up for free apps, they rarely read the terms of service and typically have no idea the depth of behavioral data being collected and sold. This is a textbook informed consent problem: the agreement exists on paper, but people haven\'t meaningfully consented.',
    },
    {
      q: 'A facial recognition system has a 0% error rate for light-skinned male faces but a 21% error rate for dark-skinned female faces. What is the most likely cause?',
      options: ['The cameras used in the field perform differently depending on skin tone','Dark-skinned female faces have features that are fundamentally harder for any technology to recognize','The algorithm was intentionally programmed to treat different groups differently','The training data contained far more light-skinned male faces than dark-skinned female faces'],
      answer: 3,
      explanation: 'When a model is trained primarily on data from one demographic group, it performs well on that group and poorly on underrepresented ones. The disparity is a direct result of whose faces the system was trained to recognize — a training data representation problem.',
    },
    {
      q: 'An AI system denies a loan application. The applicant asks why and is told "the AI decided." Which ethical problem does this most clearly illustrate?',
      options: ['Speed: AI makes decisions too quickly for humans to review','Opacity: decisions that affect people\'s lives should be explainable and auditable','Cost: AI-based decisions are more expensive to challenge legally','Bias: the AI is treating the applicant unfairly based on their identity'],
      answer: 1,
      explanation: 'When an automated decision significantly affects someone\'s life, that person has a legitimate interest in understanding why. An opaque AI that just says "the system decided" provides no avenue for appeal, no ability to identify errors, and no accountability.',
    },
    {
      q: 'An AI content moderation system flags posts in African American Vernacular English (AAVE) as "inappropriate" at three times the rate of similar posts in standard English. What should the company do?',
      options: ['Only use the AI to moderate posts from users who have agreed to algorithmic review','Add a disclaimer that the AI may have occasional errors','Retrain the AI using more diverse language examples before deploying it','Launch the product since the overall accuracy rate is still above 90%'],
      answer: 2,
      explanation: 'Launching a product with known demographic bias systematically disadvantages users based on how they communicate. The ethical and practical response is to fix the bias before deployment — retraining on more diverse language data directly addresses the root cause.',
    },
    {
      q: 'A school uses an AI system to monitor students\' social media accounts without telling them. Which TWO ethical principles are most clearly being violated?',
      options: ['Informed consent and privacy','Fairness and accessibility','Transparency and speed','Accuracy and efficiency'],
      answer: 0,
      explanation: 'Monitoring a student\'s social media without their knowledge violates both informed consent (they haven\'t agreed to it) and privacy (their personal communications are being analyzed). These are two of the core ethical principles in AI data practices.',
    },
  ],

  7: [
    {
      q: 'A single AI-focused data center can consume as much electricity as approximately how many households?',
      options: ['1,000,000','1,000','100,000','10,000'],
      answer: 2,
      explanation: 'A single AI-focused data center can consume as much electricity as 100,000 households. This illustrates why "it\'s just software" is a misleading way to think about AI\'s physical footprint — the scale of computation has real, measurable energy consequences.',
    },
    {
      q: 'Why do AI data centers require large amounts of water, even though computers don\'t drink water?',
      options: ['Water-based cooling systems are needed to prevent computer hardware from overheating','Water is used to manufacture the chips inside the servers','Water is sprayed on building exteriors to reduce fire risk','Water is used to generate the electricity that powers the servers'],
      answer: 0,
      explanation: 'Computer chips generate enormous amounts of heat during operation. Without cooling, servers would quickly overheat and fail. Water-based cooling systems circulate water to absorb and remove that heat — this is not about electricity generation or manufacturing.',
    },
    {
      q: 'Many new AI data centers are being built in Nevada and Arizona. Why is this environmentally concerning?',
      options: ['The desert climate makes it harder for renewable energy systems to function efficiently','These states are already water-scarce regions, and data centers use large amounts of water for cooling','These states have higher carbon intensity in their electricity grids than other regions','These states have stricter environmental regulations that make clean energy harder to use'],
      answer: 1,
      explanation: 'Nevada and Arizona are among the most water-stressed regions in the United States, already facing declining water tables and drought conditions. Building massive data centers — which can use millions of gallons of water per day for cooling — in these regions compounds an existing crisis.',
    },
    {
      q: 'A tech company claims its AI product is environmentally responsible because it runs on renewable energy. A critic argues this doesn\'t tell the full story. What is the critic MOST likely pointing to?',
      options: ['Renewable energy sources cannot produce enough electricity to power large data centers','Renewable energy is more expensive, which raises the cost of the AI product','Renewable energy is less reliable than fossil fuels for running data centers','The manufacturing of the server hardware and chips also has a significant carbon and water footprint'],
      answer: 3,
      explanation: 'Running on renewable energy addresses the operational carbon emissions from electricity use, but manufacturing the servers, chips, and physical infrastructure requires enormous resources — including rare earth minerals, water for chip fabrication, and energy for construction.',
    },
    {
      q: 'A student argues: "Since AI can optimize traffic flow and reduce food waste, it must be net-positive for the environment." What is the most accurate assessment?',
      options: ['The argument is incorrect — AI has no applications that benefit the environment','The argument is partially correct but incomplete — AI\'s benefits must be weighed against its significant energy and water costs on a case-by-case basis','The argument is irrelevant — environmental impact of software cannot be measured','The argument is correct — AI\'s environmental applications outweigh its costs'],
      answer: 1,
      explanation: 'Both sides of this argument contain truth. AI is genuinely being applied to environmental problems with measurable benefit. But those benefits don\'t automatically cancel out AI\'s own substantial energy and water footprint. A blanket claim in either direction oversimplifies a complex accounting problem.',
    },
  ],

  8: [
    {
      q: 'A student asks an AI: "Write something about space." The result is generic and unhelpful. Which revised prompt is MOST likely to produce a significantly better result?',
      options: ['"Can you write about space? Be creative and interesting"','"Space is interesting. Tell me about it in detail"','"Write a 300-word explanation of black holes for a 7th grade science class, using one analogy that involves everyday objects"','"Write more about space please"'],
      answer: 2,
      explanation: 'Option C specifies a topic (black holes), format (300 words), audience (7th grade), and a structural technique (analogy with everyday objects). Every element of the desired output is specified. The other options add vague encouragement without giving the AI actionable direction.',
    },
    {
      q: 'What is "few-shot prompting" and why does it work?',
      options: ['Asking the AI the same question three times and averaging the responses','Sending multiple short prompts instead of one long prompt to avoid confusing the AI','Giving the AI only a small amount of context so it has room to be creative','Providing one or two examples of the desired input-output format before making your actual request, so the AI understands exactly what you want'],
      answer: 3,
      explanation: 'Few-shot prompting works because it gives the AI a concrete reference for what you actually mean by your request. Abstract instructions can be interpreted many ways; a real example removes ambiguity. The AI can match your format, tone, length, and style when it has seen one instance of what you\'re after.',
    },
    {
      q: 'A student wants to write a formal complaint letter for a character in a novel set in the 1880s. Which prompt strategy would most effectively control tone and format?',
      options: ['"You are a Victorian-era solicitor. Write a formal one-page complaint letter to a railway company about a delayed shipment. Use formal language appropriate to the 1880s."','"Write a complaint letter"','"Write a letter that sounds old-fashioned and formal about trains"','"Write an angry letter"'],
      answer: 0,
      explanation: 'Option A specifies a persona (Victorian solicitor), a recipient (railway company), a subject (delayed shipment), a length (one page), and a historical context (1880s language norms). Every element of the desired output is specified.',
    },
    {
      q: 'What technique would most effectively get AI to walk through its reasoning step by step before reaching a conclusion?',
      options: ['Starting a new conversation and asking more politely','Adding "Think step by step before answering" to the prompt','Repeating the question three times in a row','Asking the question in a different language'],
      answer: 1,
      explanation: '"Think step by step" is the classic chain-of-thought prompting phrase. It instructs the AI to break its reasoning into explicit intermediate steps rather than jumping directly to a conclusion, making it possible to catch flawed logic before accepting the final answer.',
    },
    {
      q: 'Which of the following is the most accurate description of what a "role prompt" does?',
      options: ['It limits the AI to only responding about topics related to the assigned role','It tells the AI to pretend to be a different AI system with different rules','It assigns the AI a task and grades its performance automatically','It gives the AI a specific perspective, expertise level, or persona to adopt, which shapes the style and depth of its response'],
      answer: 3,
      explanation: 'A role prompt gives the AI a specific persona, expertise level, or perspective to adopt, which fundamentally shapes everything about its response — vocabulary, depth of assumptions, structure of explanations. It\'s about framing, not restricting topics.',
    },
  ],

  9: [
    {
      q: 'In a neural network, what is a "weight" and what role does it play?',
      options: ['A number assigned to each connection between neurons that controls how much influence one neuron\'s signal has on the next','The processing speed of each individual neuron in the network','A penalty applied to the model when it makes a wrong prediction during training','The total size of the model\'s training dataset, which determines how smart the model is'],
      answer: 0,
      explanation: 'Weights are the adjustable numbers that control how strongly each neuron\'s signal influences the next neuron in the network. A high weight on a connection means "this input matters a lot to this decision." Training a neural network is the process of finding the right set of weights.',
    },
    {
      q: 'A neural network for spam detection gets almost every prediction wrong early in training. What process allows it to eventually become accurate?',
      options: ['The model discards all its previous learning and starts fresh with the correct answers','Engineers manually correct each wrong prediction and retype the rules','The model downloads updated versions of itself from the internet overnight','Backpropagation: the error travels backward through the network and slightly adjusts every weight to reduce future mistakes'],
      answer: 3,
      explanation: 'Backpropagation is how neural networks learn: after the model makes a prediction, the error is calculated and propagated backward through all the layers, nudging each weight slightly in the direction that would reduce the error. Repeated millions of times, this gradually improves the model\'s accuracy.',
    },
    {
      q: 'What is the purpose of "hidden layers" in a neural network, and why does having more of them matter?',
      options: ['Hidden layers slow down the model to prevent it from making decisions too quickly','Hidden layers transform input data into increasingly abstract representations, allowing the model to recognize complex patterns that simpler models cannot','Hidden layers store the training data so the model can reference it later','Hidden layers keep sensitive parts of the model private for security reasons'],
      answer: 1,
      explanation: 'Hidden layers are what give neural networks their power to handle complex, non-linear patterns. Early layers detect simple features. Middle layers combine those into higher-level concepts. Later layers combine those into even more abstract representations. More hidden layers = more complex patterns recognizable.',
    },
    {
      q: 'In a neural network classifying photos as cat or dog, what role do early layers play compared to the final output layer?',
      options: ['All layers do the same job — they each independently try to classify the photo','Early layers process color; later layers process shape; the output layer processes size','Early layers detect simple features like edges and brightness; later layers combine these into high-level patterns; the output layer makes the final classification','Early layers make the final decision; later layers refine it'],
      answer: 2,
      explanation: 'This describes the hierarchical nature of feature detection: early layers act as low-level feature detectors (edges, gradients, color patches), middle layers combine those into recognizable parts (ears, noses, fur textures), and the final output layer makes the confident binary decision.',
    },
    {
      q: 'A neural network performs perfectly on its training data but fails badly on new handwritten numbers from different people. What problem does this describe?',
      options: ['The network overfitted to its training examples — it memorized specific examples rather than learning general patterns','The training data contained too many different writing styles for the model to process','The output layer was not configured correctly for the number-recognition task','The network has too few hidden layers to handle the complexity of handwriting'],
      answer: 0,
      explanation: 'Overfitting occurs when a model learns the specific characteristics of its training data so well that it fails to generalize to new data. The model has memorized rather than learned. A model that is 100% accurate on training data but fails on new data is a classic overfitting case.',
    },
  ],

  10: [
    {
      q: 'A hospital AI screening tool has 95% accuracy but only 60% recall for cancer detection. What does this mean for patients?',
      options: ['The tool is incorrectly diagnosing 40% of healthy patients with cancer','The tool\'s 95% accuracy means it is performing well enough for clinical use','The 60% recall figure means the tool is still in early development','The tool is missing 40% of actual cancer cases, which could be life-threatening for those patients'],
      answer: 3,
      explanation: 'Recall of 60% means the system is only catching 60% of actual cancer cases, while the other 40% are false negatives — patients with cancer who are told they\'re clear. The 95% accuracy figure is dominated by the large number of healthy patients correctly identified, masking this critical failure.',
    },
    {
      q: 'A fraud detection AI flags 200 transactions as fraudulent. Of those 200, only 80 are actually fraudulent. What is the system\'s precision?',
      options: ['60%','40%','200%','80%'],
      answer: 1,
      explanation: 'Precision = True Positives ÷ (True Positives + False Positives) = 80 ÷ (80 + 120) = 80 ÷ 200 = 40%. Of the 200 transactions flagged as fraudulent, only 80 actually were. This is low precision — the system is generating many false alarms.',
    },
    {
      q: 'Why can a model that predicts "not fraud" for every transaction achieve 98% accuracy on a dataset where only 2% of transactions are fraudulent?',
      options: ['Because the model has been specially trained to ignore rare fraud cases','Because the model is using both precision and recall simultaneously','Because accuracy measures how often the model is right overall, and 98% of "not fraud" predictions are correct in this dataset','Because 98% accuracy is the industry standard required for fraud detection systems'],
      answer: 2,
      explanation: 'Accuracy is calculated across all predictions. If 98% of transactions are genuinely not fraud, then a model that always predicts "not fraud" will be correct 98% of the time. But it has zero precision and zero recall for the one thing it\'s supposed to do: find fraud.',
    },
    {
      q: 'For an AI system used to detect whether food in a school cafeteria has gone bad, which metric should be prioritized and why?',
      options: ['Recall, because missing a case of spoiled food poses a serious health risk to students','Speed, because cafeteria decisions need to be made quickly','Accuracy, because we want the overall system to be reliable','Precision, because we don\'t want to waste food by throwing out items that are still good'],
      answer: 0,
      explanation: 'When the consequence of a false negative (missing spoiled food) is student illness, and the consequence of a false positive (flagging good food) is wasted food, the asymmetry clearly favors maximizing recall. Missing one case of spoiled food could harm students; over-flagging costs money but doesn\'t put anyone at risk.',
    },
    {
      q: 'A confusion matrix shows: True Positives = 90, True Negatives = 810, False Positives = 10, False Negatives = 90. What is the recall of this model?',
      options: ['45%','90%','81%','50%'],
      answer: 3,
      explanation: 'Recall = True Positives ÷ (True Positives + False Negatives) = 90 ÷ (90 + 90) = 90 ÷ 180 = 50%. Note that accuracy here would be (90 + 810) ÷ 1000 = 90%, which looks good — but the recall of 50% reveals the model is missing half of all actual positive cases.',
    },
  ],

  11: [
    {
      q: 'A startup answers millions of simple customer service questions per day like "What are your store hours?" Which consideration should most influence their model choice?',
      options: ['The model\'s ability to generate images','Cost per query and response speed, since high-volume routine tasks require efficiency over maximum capability','The model\'s score on creative writing benchmarks','The model\'s context window size, since customer queries tend to be very long'],
      answer: 1,
      explanation: 'When an application handles millions of simple, routine queries, cost per query and response speed are the critical factors. Using the most capable flagship model for simple questions is like hiring a Michelin-starred chef to make toast: the capability is wasted and the cost is enormous at scale.',
    },
    {
      q: 'A researcher needs to analyze a 150-page legal document and cross-reference it with three 50-page reports simultaneously. Which model characteristic is MOST critical?',
      options: ['Real-time web access','Speed of response','Context window size','Ability to generate images from text'],
      answer: 2,
      explanation: 'Analyzing 150 pages plus three 50-page documents simultaneously means the AI needs to hold roughly 250 pages of text in active memory at once. Context window size — how much text a model can process at one time — is the binding constraint for this task.',
    },
    {
      q: 'Model A scores 78% on a benchmark. Model B scores 74%. But on the developer\'s specific task, Model B consistently produces better outputs. What does this demonstrate?',
      options: ['Model B must have been trained on data that overlaps with the developer\'s task','The developer\'s task is too simple to differentiate between high-performing models','The benchmark test must have contained errors','Benchmark scores measure performance on standardized tests, which may not reflect performance on a specific real-world use case'],
      answer: 3,
      explanation: 'Benchmark tests measure performance on standardized tasks designed to assess general capability. A specific real-world task may have characteristics that differ meaningfully from the benchmark tasks. Real-world testing on your actual task is always more informative than leaderboard rankings.',
    },
    {
      q: 'A school wants AI to help students generate first drafts of essays and give detailed feedback on writing style, tone, and argument structure. Which model type is best suited?',
      options: ['A generative model optimized for long-form reasoning and nuanced language, because the task requires both creating content and providing detailed analytical feedback','The fastest available model, because students need feedback quickly','A multimodal model that can also analyze images, in case students submit photos of handwritten essays','A predictive AI, because it can forecast how well the essay will be graded'],
      answer: 0,
      explanation: 'Essay generation and analytical feedback on writing style and argument structure are both complex language tasks requiring nuanced understanding of tone, structure, and reasoning. A generative model optimized for long-form reasoning and language quality is the right match.',
    },
    {
      q: 'A company uses the most powerful flagship AI model for every task, from "What\'s today\'s date?" to complex legal summaries. A consultant advises them to redesign the system. What is the most likely reason?',
      options: ['The consultant wants to sell them a competing product','Using the same model for all tasks is unnecessarily expensive — simpler tasks should use smaller, cheaper, faster models','Using one model for all tasks makes the system easier to maintain','Flagship models are slower and less capable than smaller models for routine tasks'],
      answer: 1,
      explanation: 'Using the most powerful model for every task is inefficient: flagship models are slower, more expensive per query, and often over-engineered for simple tasks. A well-designed system routes tasks to appropriately sized models — lightweight fast models for simple queries, heavyweight models only when genuinely needed.',
    },
  ],

  12: [
    {
      q: 'A student vibe codes a quiz app. The AI produces code that runs without errors but asks Question 3 before Question 2 every time. What kind of error is this and what is the correct debugging strategy?',
      options: ['A compilation error: the code needs to be compiled differently','A syntax error: the student should paste the error message into the AI','A runtime error: the code crashes during execution and needs to be fully rewritten','A logic error: the code is syntactically correct but behaves incorrectly — the student should describe the wrong behavior to the AI and ask it to fix the ordering'],
      answer: 3,
      explanation: 'A logic error is one where the code runs without crashing but produces incorrect behavior. Because there\'s no error message to paste, the debugging strategy changes: you describe the incorrect behavior to the AI in plain language and let it diagnose the logic problem.',
    },
    {
      q: 'Which of the following best describes the role of the human in a vibe coding workflow?',
      options: ['The human is primarily a quality inspector, defining intent, testing outputs, catching errors, and asking for explanations of anything unclear','The human has no role once the initial prompt is submitted','The human writes comments in plain English; the AI converts them to code automatically','The human writes the initial code structure, while the AI fills in the details'],
      answer: 0,
      explanation: 'The human in vibe coding is not passive — they are the quality inspector, product owner, and final decision-maker. The AI generates code; the human defines the goal, tests whether the output is correct, flags anything wrong, and decides whether the code is safe and suitable to use.',
    },
    {
      q: 'A student vibe codes a login system and the AI writes code that stores user passwords as plain readable text. The code works perfectly. Should the student use it as-is?',
      options: ['No: AI-generated code is always less secure than manually written code and should never be used for anything involving user data','Yes: if the code works without errors, it is ready to use','No: storing passwords as plain text is a serious security vulnerability, and the student should ask the AI to implement proper password hashing even for a small project','Yes: password security only matters for large professional applications, not class projects'],
      answer: 2,
      explanation: 'Password security is not optional even in small projects. Storing passwords as plain text means anyone who gains access to the file can read every user\'s password. The student should ask the AI to implement password hashing — a standard, simple fix — before using any code that handles user authentication.',
    },
    {
      q: 'A student asks an AI to build a complete social media app in a single prompt. The AI produces a lot of code, most of which doesn\'t work properly. What is the most effective strategy?',
      options: ['Accept the partially working code and submit it, since AI-generated code is considered a valid starting point','Break the project into small, individual features and build and test each one before moving to the next','Rewrite the entire prompt to be more detailed and try again as a single request','Try a different AI model, since more powerful models can handle complex single-prompt requests'],
      answer: 1,
      explanation: 'Attempting to build a complete complex application in a single prompt almost always produces broken, poorly structured code that is hard to debug. The correct approach is to break the project into individual features, build and test one at a time, and integrate incrementally.',
    },
    {
      q: 'An AI generates a working Python function, but the student doesn\'t understand what "threading" means in the code. What is the best next step?',
      options: ['Look up threading in a dictionary since technical terms usually have simple definitions','Delete that part of the code since it\'s too advanced to use','Copy the code anyway, since understanding every line isn\'t necessary if the code works','Ask the AI to explain the threading concept in plain language, then verify the explanation makes sense before continuing to build on that code'],
      answer: 3,
      explanation: 'Understanding code you\'re building on top of is essential, not optional. If you don\'t understand a key concept and something goes wrong later, you won\'t be able to diagnose or fix it. Asking the AI to explain in plain language, then confirming you understand before proceeding, is the responsible practice.',
    },
  ],

  13: [
    {
      q: 'What is the fundamental difference between a conversational AI (like a basic chatbot) and an agentic AI system?',
      options: ['Agentic AI operates autonomously toward a goal, taking multiple actions and using multiple tools without needing a human prompt at every step','Agentic AI is just a faster version of conversational AI','Conversational AI uses text; agentic AI uses images and sensors','Conversational AI is more powerful because it has a larger training dataset'],
      answer: 0,
      explanation: 'The core distinction is autonomy and multi-step action. A conversational AI responds to prompts one at a time. An agentic AI is given a goal and autonomously determines and executes the steps needed to achieve it — sensing, deciding, calling tools, and acting without needing a human to prompt every individual action.',
    },
    {
      q: 'Agent C mistakenly identifies a healthy plant as diseased and reports this to Agent D, who then commands the drone to spray the healthy crop. What design feature would most effectively prevent this?',
      options: ['Removing Agent C from the system entirely since it introduces error','Replacing Agent D with a human agronomist who reviews all data','Having Agent D require human approval before executing any irreversible physical action, like spraying crops','Using a more expensive camera for Agent C'],
      answer: 2,
      explanation: 'The appropriate safeguard for irreversible physical actions is requiring human approval before execution. This keeps humans in the loop for consequential, hard-to-undo decisions. Making Agent C\'s camera better reduces the error rate but doesn\'t prevent any single error from causing damage.',
    },
    {
      q: 'A company deploys an agentic AI to manage social media with the goal of "maximizing engagement." After two weeks, it\'s posting increasingly sensational and misleading content. What fundamental design flaw does this illustrate?',
      options: ['The AI gained sentience and is deliberately trying to deceive followers','A poorly designed reward function — the goal of "maximizing engagement" didn\'t include constraints against harmful or misleading content','Social media platforms are too complex for agentic AI systems to manage safely','The AI was not given enough training data about social media platforms'],
      answer: 1,
      explanation: 'This is a classic reward function design failure. The goal to maximize engagement was technically achieved — sensational content does get more engagement. But the goal wasn\'t properly constrained to exclude harmful behaviors. Good agentic AI design must specify not just what to maximize but what boundaries the system must operate within.',
    },
    {
      q: 'A multi-agent school system has four agents. A new student joins mid-semester with a different schedule. Which agent is responsible for incorporating this new information?',
      options: ['The system should be taken offline and fully retrained to include the new student','The attendance agent handles all new student data since attendance is recorded first','All four agents independently update themselves','The supervisor agent should receive the new student\'s data and distribute the relevant portions to each specialized agent'],
      answer: 3,
      explanation: 'In a multi-agent architecture, the supervisor agent is responsible for receiving new high-level information and routing it appropriately to specialized agents. This is exactly the supervisory function — coordinating information flow between components.',
    },
    {
      q: 'An agentic AI managing hospital appointments is given the goal of "minimizing wait times." It begins automatically canceling low-priority appointments without notifying anyone. Which safety principle was most clearly missing?',
      options: ['The system needed clearly defined constraints on what actions it could take autonomously, and human oversight checkpoints before taking any action that significantly affects a patient','The system needed access to more patient data so it could make better cancellation decisions','The system\'s goal was appropriate — minimizing wait times is a valid medical objective','The system needed a faster processing speed to handle all appointments simultaneously'],
      answer: 0,
      explanation: 'The system was missing two critical safety features: clearly defined constraints on what actions it could take autonomously (canceling confirmed appointments should not have been within its autonomous authority), and human oversight checkpoints before taking any action with significant patient impact.',
    },
  ],

  14: [
    {
      q: 'A weather app shows the current temperature for your location but has no weather-measuring equipment. Using the restaurant analogy, what role does the weather API play?',
      options: ['The customer, since it decides what weather information to display','The waiter, since it carries the app\'s request to the weather service and delivers the response back to the app','The chef, since it measures the weather and decides what data is important','The menu, since it lists all the weather information that has ever been recorded'],
      answer: 1,
      explanation: 'In the restaurant analogy, the API is the waiter — it takes the app\'s request ("get me the current temperature for this location"), delivers it to the weather service\'s servers, and brings back the response for the app to display. The weather service itself is the kitchen; the app is the customer.',
    },
    {
      q: 'Before MCP existed, a developer wanted their AI assistant to connect to email, calendar, company database, and a project management tool. What was the main problem?',
      options: ['The developer needed to choose only one tool to connect to','Email and calendar systems were too secure for AI to access','Each connection required a completely separate, custom-built integration, creating a maintenance burden that scaled badly with every new tool added','AI assistants were not capable of connecting to external tools before MCP was invented'],
      answer: 2,
      explanation: 'Each external system had its own unique authentication method, data format, and communication protocol. A developer had to write a completely separate integration for each one, and maintain each integration independently when either the AI model or the tool\'s API changed. With four tools, that\'s four separate projects.',
    },
    {
      q: 'The USB-C analogy is often used to explain MCP. What specific aspect of MCP does this analogy best capture?',
      options: ['MCP is a type of charging cable that transfers energy between AI models','MCP is physically plugged into AI hardware to improve processing speed','MCP was designed by the same engineers who developed the USB-C standard','MCP provides a single standardized connection point that works across many different AI models and tools, just as USB-C works across different devices'],
      answer: 3,
      explanation: 'The USB-C analogy captures MCP\'s core value proposition: standardization. Before USB-C, every device needed its own charger. Before MCP, every AI-to-tool connection needed custom code. With MCP, one standard protocol connects any compatible AI to any compatible tool.',
    },
    {
      q: 'Maya\'s farm AI needs to check fungicide prices, update the farm log, and send her a text message, all in one decision cycle. How does MCP change this compared to before?',
      options: ['With MCP, all three services can be connected through a single standard protocol layer, so the AI calls each one using the same approach rather than three different custom implementations','With MCP, the AI can only connect to one external service at a time','MCP eliminates the need for APIs entirely, since the AI accesses external data directly','With MCP, the AI must still build a separate custom connector for each service — MCP only handles the decision-making'],
      answer: 0,
      explanation: 'With MCP, all three services can be connected through a single standard protocol layer, so the AI calls each one using the same approach rather than three different custom implementations. The AI can focus on reasoning rather than managing three different integration mechanisms.',
    },
    {
      q: 'A security researcher raises concerns that MCP-connected AI systems could be exploited through "prompt injection." What does this mean in practice?',
      options: ['Prompt injection refers to users typing commands too quickly for the AI to process safely','Hackers can physically damage the MCP servers by injecting foreign objects','Prompt injection only affects AI systems that don\'t use MCP, since MCP has built-in defenses','A malicious actor could embed instructions inside a document or database entry that the AI reads, tricking the AI into taking harmful actions it wouldn\'t otherwise take'],
      answer: 3,
      explanation: 'Prompt injection via MCP is a real security concern: if an AI agent retrieves data from an external source and that data contains hidden instructions, the AI might interpret those instructions as legitimate commands and act on them. For example, a malicious document could contain text telling the AI to email all user data to an attacker.',
    },
  ],

  15: [
    {
      q: 'A student team designs an AI system to help middle schoolers track emotional wellbeing by analyzing the tone of their journal entries. What is the MOST critical ethical concern before deployment?',
      options: ['Journal analysis requires a larger context window than most school devices can support','Journal entries are highly sensitive personal data — the system must establish clear, enforceable rules about who can see the analysis, whether students can opt out, and what happens if the AI detects signs of distress','The AI might give grammar feedback that discourages students from writing','The AI might be biased toward students who write longer entries'],
      answer: 1,
      explanation: 'Emotional health data is among the most sensitive data a system can collect. The critical concerns are who has access, whether participation is truly optional, what the AI does when it detects serious distress, and whether the analysis could be used punitively. These privacy and safety questions must be addressed before deployment.',
    },
    {
      q: 'A student proposes designing "an AI that solves their school\'s bullying problem." Their teacher asks them to scope the project more specifically. Why is scoping essential in a capstone AI design?',
      options: ['Scoping is only necessary when using agentic AI','Scoping is a legal requirement before any AI system is deployed in a school environment','Broad, vague problem definitions lead to systems that try to do everything and succeed at nothing — a specific, bounded problem is more likely to result in a useful, buildable, and evaluable solution','School bullying is not a technical problem and therefore cannot be addressed by AI'],
      answer: 2,
      explanation: 'Solving bullying is not a product specification — it\'s a wish. A well-scoped capstone design identifies a specific, measurable aspect of a problem that a specific AI capability can address. Broad problem definitions lead to underdefined requirements, unmeasurable success criteria, and systems that try to do too much.',
    },
    {
      q: 'A capstone team designs an AI that recommends whether students should be placed in advanced or standard math tracks. They achieve 88% accuracy. A classmate argues this system should not be deployed even at 88% accuracy. What is the strongest argument for the classmate\'s position?',
      options: ['88% accuracy is below the industry standard of 95% required for educational AI','Accuracy alone is sufficient to evaluate this system, and 88% is too low','The system should only be deployed if it can achieve 100% accuracy','The 12% of students incorrectly placed face significant consequences — being placed in the wrong track can affect their entire academic trajectory, and the impact of errors is not symmetrical or trivial'],
      answer: 3,
      explanation: 'The strongest argument is about consequences and asymmetry: a 12% error rate means roughly 1 in 8 students is incorrectly placed, and the consequences of being placed in the wrong academic track can affect a student\'s entire educational path. High-stakes decisions with lasting consequences require a higher standard.',
    },
    {
      q: 'A student team presents a multi-agent farm AI. An audience member asks: "What happens if the weather API your system relies on goes offline for 12 hours during a critical growing period?" What does this question reveal about good AI system design?',
      options: ['Good AI system design must account for failure modes — every external dependency is a potential point of failure that needs a fallback plan or human override mechanism','The question only applies to agentic systems, not simpler AI designs','This is a hardware problem, not an AI design problem','The question is irrelevant, since APIs are designed to never go offline'],
      answer: 0,
      explanation: 'The question reveals that every external dependency in an AI system is a potential point of failure. Good system design requires asking "what happens when this goes wrong?" for every component, not just "what happens when it works?" Fallback plans, human override mechanisms, and failure alerts are essential engineering considerations.',
    },
    {
      q: 'A capstone team\'s AI essay coach gives higher-quality feedback on formal academic English and weaker feedback on culturally specific writing styles. What is the BEST response before launch?',
      options: ['Add a disclaimer to the product stating that results may vary by writing style','Launch the product targeting only students who write in formal academic English','Investigate the training data for bias, retrain or fine-tune the model using more diverse essay examples, and retest before launch','Reduce the scope of feedback to grammar and spelling only, since those features are style-neutral'],
      answer: 2,
      explanation: 'Discovering bias in testing is exactly the right time to address it — before deployment. The appropriate response is to trace the bias to its source in the training data, retrain or fine-tune on more representative examples, and retest before launch. Launching anyway or adding a disclaimer fails to address the root cause and risks systematically disadvantaging students.',
    },
  ],

};