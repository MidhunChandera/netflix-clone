import React from 'react'

function Frequentlyasked() {
  return (
    <>
      
<div class="faq">
<h4 style={{color:'white'}}>Frequently Asked Questions</h4>
<ul class="accordion">
<li>
 <input type="radio" name="accordion" id="first" />
<label for="first">What is Netflix?</label>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maxir faucibus ligula in cursus. Aenean elementum mauris tellus, ullamcorp fringilla justo suscipit ut. Ut eu justo semper, cursus velit id, feugiat odio.</p>
</div>
</li>
<li>
 <input type="radio" name="accordion" id="second" />
<label for="second">How much does Netflix cost?</label>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maxir faucibus ligula in cursus. Aenean elementum mauris tellus, ullamcorp fringilla justo suscipit ut. Ut eu justo semper, cursus velit id, feugiat odio.</p>
</div>
</li>
<li>
 <input type="radio" name="accordion" id="third" />
<label for="third">Where can I watch?</label>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maxir faucibus ligula in cursus. Aenean elementum mauris tellus, ullamcorp fringilla justo suscipit ut. Ut eu justo semper, cursus velit id, feugiat odio.</p>
</div>
</li>
<li>
 <input type="radio" name="accordion" id="fourth" />
<label for="fourth">How do I cancel?</label>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maxir faucibus ligula in cursus. Aenean elementum mauris tellus, ullamcorp fringilla justo suscipit ut. Ut eu justo semper, cursus velit id, feugiat odio.</p>
</div>
</li>
<li>
 <input type="radio" name="accordion" id="fifth" />
<label for="fifth">What can I watch on Netflix?</label>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maxir faucibus ligula in cursus. Aenean elementum mauris tellus, ullamcorp fringilla justo suscipit ut. Ut eu justo semper, cursus velit id, feugiat odio.</p>
</div>
</li>
<li>
 <input type="radio" name="accordion" id="sixth" />
<label for="sixth">Is Netflix good for kids?</label>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maxir faucibus ligula in cursus. Aenean elementum mauris tellus, ullamcorp fringilla justo suscipit ut. Ut eu justo semper, cursus velit id, feugiat odio.</p>
</div>
</li>
</ul>
<p className='text-center mt-3' style={{color:'white'}}>Ready to watch? Enter your email to create or restart your membership.</p>
<div class="input-container">
      <input type="email" placeholder="Email address" id="email-input" required/>
        <button class="cta-button" id="signup-button">Get Started</button>
    </div>
</div>
    </>
  )
}

export default Frequentlyasked
