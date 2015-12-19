<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AturPenyewa extends CI_Controller {
	public function index()
	{
		$this->showformdatapenyewa();
	}
	public function showformdatapenyewa()
	{
		$this->load->view('header');
		$this->load->view('navbar');
		$this->load->view('formpenyimpanandatapenyewa');
	}
	public function inputdatapenyewa()
	{
		$this->notifikasi();
	}
	public function notifikasi()
	{
		$this->load->view('header');
		$this->load->view('navbar');
		$this->load->view('notifikasi');
	}
	public function getpenyewa()
	{
		$this->load->view('header');
		$this->load->view('navbar');
		$this->load->view('formpenyewaanlap_2');
	}
	public function setpenyewa()
	{
		$this->load->view('header');
		$this->load->view('navbar');
		$this->load->view('formpenyewaanlap_3');
	}
}
