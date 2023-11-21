<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AVenirController extends AbstractController
{
    #[Route('/a/venir', name: 'app_a_venir')]
    public function index(): Response
    {
        return $this->render('a_venir/index.html.twig', [
            'controller_name' => 'AVenirController',
        ]);
    }
}
