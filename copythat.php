 <!------------------------BOTTOM NAV FOR MOBILE PHONES ----------------- ---------------->
 <nav class="bottom">
     <?php
        $currentPageName = substr($_SERVER["SCRIPT_NAME"], strrpos($_SERVER["SCRIPT_NAME"], "/") + 1);
        ?>
     <div class="mobile-bottomnav">

         <Link to="/home" class="menu-nav" id="message-notifications">
         <?php if ($currentPageName == "home" || $currentPageName == "home") : ?>
            <span><ion-icon name="home"></ion-icon></span>
            <h3><b>Home </b> </h3>
        <?php else : ?>
            <span><ion-icon name="home-outline"></ion-icon></span>
            <h3>Home </h3>
        <?php endif ?>
        
</Link>

         <Link to="/explore" class="menu-nav">
             <?php if ($currentPageName == "explore" || $currentPageName == "explore") : ?>
                 <span><ion-icon name="search"></ion-icon></span>
             <?php else : ?>
                 <span><ion-icon name="search-outline"></ion-icon></span>
             <?php endif ?>
             <h3>Search</h3>
</Link>
         <Link to="/connect" class="menu-nav">
         <?php if ($currentPageName == "connect" || $currentPageName == "connect") : ?>
                 <span><ion-icon name="person-add"></ion-icon></span>
                 <h3> <b>Connect </b></h3>
             <?php else : ?>
                 <span><ion-icon name="person-add-outline"></ion-icon></span>
                 <h3> Connect </h3>
             <?php endif ?>
</Link>


         <?php
            $countnotify = $notifyInstance->unreadNotificationsNo($sessionid);
            if ($countnotify == 0) :
            ?>
             <!--IF THERE IS NO NOTIFICATION-->
             <Link to="/notify?read=true" class="menu-nav">
                 <?php if ($currentPageName == "notify" || $currentPageName == "notify") : ?>
                     <span><ion-icon name="notifications"></ion-icon></span>
                     <h3><b>Notifications</b></h3>
                 <?php else : ?>
                     <span><ion-icon name="notifications-outline"></ion-icon></span>
                     <h3>Notifications</h3>
                 <?php endif ?>
            </Link>
         <?php else : ?>
             <!--IF THERE IS NOTIFICATION-->
             <Link to="/notify?read=true" class="menu-nav">
                 <?php if ($currentPageName == "notify" || $currentPageName == "notify") : ?>
                     <span><ion-icon name="notifications"></ion-icon><small class="notification-count"><?php echo $countnotify; ?></small></span>
                     <h3><b>Notifications</b></h3>
                 <?php else : ?>
                     <span><ion-icon name="notifications-outline"></ion-icon><small class="notification-count"><?php echo $countnotify; ?></small></span>
                     <h3>Notifications</h3>
                 <?php endif ?>
            </Link>
         <?php endif ?>

         <?php
            $msgcount = $msgInstance->messageNo($sessionid);
            if ($msgcount == 0) :
            ?>
             <!--IF THERE IS NO MESSAGE-->
             <Link to="/inbox?read=true" class="menu-nav">
                 <?php if ($currentPageName == "inbox" || $currentPageName == "inbox") : ?>
                     <span><ion-icon name="file-tray"></ion-icon></span>
                     <h3><b>Messages</b></h3>
                 <?php else : ?>
                     <span><ion-icon name="file-tray-outline"></ion-icon></span>
                     <h3>Messages</h3>
                 <?php endif ?>
            </Link>
         <?php else : ?>
             <!--IF THERE IS A MESSAGE-->
             <Link to="/inbox?read=true" class="menu-nav">
             <?php if ($currentPageName == "inbox" || $currentPageName == "inbox") : ?>
                     <span><ion-icon name="file-tray"></ion-icon></ion-icon><small class="notification-count"><?php echo $msgcount; ?></small></span>
                     <h3><b>Messages</b></h3>
                 <?php else : ?>
                 <span><ion-icon name="file-tray-outline"></ion-icon><small class="notification-count"><?php echo $msgcount; ?></small></span>
                 <h3>Messages</h3>
                 <?php endif ?>
            </Link>
         <?php endif ?>
     </div>
 </nav>
 <!------------------------END OF BOTTOM NAV FOR MOBILE PHONES ----------------- ---------------->